import { Pokemon, PokemonResponse, PokemonSpecieResponse } from '../models';

export function normalizePokemonData(
  pokemon: PokemonResponse,
  pokemonSpecie: PokemonSpecieResponse
): Partial<Pokemon> {
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
    genera: pokemonSpecie.genera,
  };
}
