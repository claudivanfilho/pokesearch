import { API_URL } from "../config/constants";
import {
  EvolutionChainResponse,
  GenerationResponse,
  Pokemon,
  PokemonResponse,
  PokemonSpecieResponse,
  Resource,
} from "../models";

export async function fetchGenerations() {
  return fetch(`${API_URL}/generation`)
    .then((res) => res.json())
    .then(async ({ results }: { results: Resource[] }) => {
      const generations: GenerationResponse[] = [];
      for (const generation of results) {
        const generationResponse: GenerationResponse = await fetch(generation.url).then((res) =>
          res.json()
        );
        generations.push(generationResponse);
      }
      return generations;
    });
}

export async function fetchPokemon(name: string): Promise<Pokemon | null> {
  const pokemonResponse: PokemonResponse = await fetch(`${API_URL}/pokemon/${name}`).then((res) =>
    res.json()
  );
  const pokemonSpecie: PokemonSpecieResponse = await fetch(pokemonResponse.species.url).then(
    (res) => res.json()
  );
  const evolutionChain: EvolutionChainResponse = await fetch(
    pokemonSpecie.evolution_chain.url
  ).then((res) => res.json());
  const evolutionObject = await fetchEvolutions(pokemonResponse, evolutionChain);

  return {
    ...pokemonResponse,
    ...pokemonSpecie,
    evolutions: evolutionObject,
  };
}

async function fetchEvolutions(actual: PokemonResponse, evolutionChain: EvolutionChainResponse) {
  const evolutions: PokemonResponse[] = [];
  const evolutionsResponse = evolutionChain.chain.evolves_to;
  const evolutionsSpeciesInSequence = [
    evolutionChain.chain.species,
    evolutionsResponse?.[0]?.species,
    evolutionsResponse?.[0]?.evolves_to?.[0]?.species,
  ].filter((e) => e);

  for (let i = 0; i < evolutionsSpeciesInSequence.length; i++) {
    const specieName = evolutionsSpeciesInSequence[i].name;
    if (actual.name === specieName) {
      evolutions.push(actual);
    } else {
      const pokemonEvolution: PokemonResponse = await fetch(
        `${API_URL}/pokemon/${specieName}`
      ).then((res) => res.json());
      evolutions.push(pokemonEvolution);
    }
  }

  return evolutions;
}
