import CONSTANTS from '../config/constants';
import { Pokemon } from '../models/index';
import {
  PokemonResponse,
  PokemonSpecieResponse,
  EvolutionChainResponse
} from '../models/index';

export const generationsFetcher = (...args: any) =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());

export const generationFetcher = (...args: any) =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());

function normalizePokemonData(
  pokemon: PokemonResponse,
  pokemonSpecie: PokemonSpecieResponse
) {
  return {
    name: pokemon.name,
    sprites: pokemon.sprites,
    stats: pokemon.stats,
    height: pokemon.height,
    is_default: pokemon.is_default,
    flavor_text_entries: pokemonSpecie.flavor_text_entries,
    color: pokemonSpecie.color,
    base_happiness: pokemonSpecie.base_happiness,
    capture_rate: pokemonSpecie.capture_rate,
    genera: pokemonSpecie.genera
  } as Pokemon;
}

async function getEvolutionObject(
  actual: PokemonResponse,
  evolutionChain: EvolutionChainResponse
) {
  const evolution: {
    stage1?: PokemonResponse;
    stage2?: PokemonResponse;
    stage3?: PokemonResponse;
  } = {};
  if (evolutionChain.chain.species.name === actual.name) {
    evolution.stage1 = actual;
  } else {
    try {
      evolution.stage1 = await fetch(
        `${CONSTANTS.apiUrl}/pokemon/${evolutionChain.chain.species.name}`
      ).then((res) => res.json());
    } catch {
      evolution.stage1 = actual;
    }
  }
  if (evolutionChain.chain.evolves_to.length) {
    if (evolutionChain.chain.evolves_to[0].species.name === actual.name) {
      evolution.stage2 = actual;
    } else {
      try {
        evolution.stage2 = await fetch(
          `${CONSTANTS.apiUrl}/pokemon/${evolutionChain.chain.evolves_to[0].species.name}`
        ).then((res) => res.json());
      } catch {
        evolution.stage2 = actual;
      }
    }

    if (evolutionChain.chain.evolves_to[0].evolves_to.length) {
      if (
        evolutionChain.chain.evolves_to[0].evolves_to[0].species.name ===
        actual.name
      ) {
        evolution.stage3 = actual;
      } else {
        try {
          evolution.stage3 = await fetch(
            `${CONSTANTS.apiUrl}/pokemon/${evolutionChain.chain.evolves_to[0].evolves_to[0].species.name}`
          ).then((res) => res.json());
        } catch {
          evolution.stage3 = actual;
        }
      }
    }
  }
  return evolution;
}

export async function getPokemon({ name, id }: { name?: string; id?: string }) {
  let pokemon: PokemonResponse;
  let pokemonSpecie: PokemonSpecieResponse;
  try {
    pokemon = await fetch(
      `${CONSTANTS.apiUrl}/pokemon/${name || id}`
    ).then((res) => res.json());
    pokemonSpecie = await fetch(pokemon.species.url).then((res) => res.json());
    const evolutionChain: EvolutionChainResponse = await fetch(
      pokemonSpecie.evolution_chain.url
    ).then((res) => res.json());
    const evolutionObject = await getEvolutionObject(pokemon, evolutionChain);
    return {
      ...normalizePokemonData(pokemon, pokemonSpecie),
      evolution: evolutionObject
    };
  } catch (error) {
    console.log('error', error.message);
    return {
      name,
      color: { name: 'white' }
    } as any;
  }
}
