import { Cache, mutate } from "swr";

import { API_URL } from "../config/constants";
import {
  EvolutionChainResponse,
  GenerationResponse,
  Pokemon,
  PokemonResponse,
  PokemonSpecieResponse,
  Resource,
} from "../models";

export async function fetchGenerations(): Promise<GenerationResponse[]> {
  return fetch(`${API_URL}/generation`)
    .then((res) => res.json())
    .then(async ({ results }: { results: Resource[] }) =>
      Promise.all(results.map((generation) => fetch(generation.url).then((res) => res.json())))
    )
    .then((res) => {
      res.forEach((generation) => {
        mutate(`${API_URL}/generation/${generation.id}`, generation, false);
      });
      return res;
    });
}

export async function fetchPokemon(name: string, cache: Cache): Promise<Pokemon | null> {
  const pokemonResponse: PokemonResponse = await fetch(`${API_URL}/pokemon/${name}`).then((res) =>
    res.json()
  );
  const pokemonSpecie: PokemonSpecieResponse = await fetch(pokemonResponse.species.url).then(
    (res) => res.json()
  );
  const pokemonChainCache = cache.get(pokemonSpecie.evolution_chain.url);
  const evolutionChain: EvolutionChainResponse =
    pokemonChainCache ||
    (await fetch(pokemonSpecie.evolution_chain.url)
      .then((res) => res.json())
      .then((res) => {
        mutate(pokemonSpecie.evolution_chain.url, res, false);
        return res;
      }));
  const evolutionsResponse = evolutionChain.chain.evolves_to;

  return {
    ...pokemonResponse,
    ...pokemonSpecie,
    evolutions: [
      evolutionChain.chain.species,
      evolutionsResponse?.[0]?.species,
      evolutionsResponse?.[0]?.evolves_to?.[0]?.species,
    ].filter((e) => e),
  };
}
