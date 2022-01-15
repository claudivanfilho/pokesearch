import { mutate } from "swr";

import { API_URL } from "../config/constants";
import {
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

export async function fetchPokemon(name: string): Promise<Pokemon | null> {
  const pokemonResponse: PokemonResponse = await fetch(`${API_URL}/pokemon/${name}`).then((res) =>
    res.json()
  );
  const pokemonSpecie: PokemonSpecieResponse = await fetch(pokemonResponse.species.url).then(
    (res) => res.json()
  );
  return {
    ...pokemonResponse,
    ...pokemonSpecie,
  };
}
