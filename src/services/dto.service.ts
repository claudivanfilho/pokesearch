import { GenerationResponse, Pokemon } from '../models';

export function normalizeGeneration(
  generation: GenerationResponse,
  locale: string
): GenerationResponse {
  return {
    ...generation,
    nameTranslated:
      generation?.names.find((n) => n.language.name === locale)?.name || generation?.names[0].name,
  };
}

export function normalizePokemon(pokemon: Pokemon, locale: string): Pokemon {
  const descriptionTranslated =
    pokemon?.flavor_text_entries.find((text) => text.language.name === locale)?.flavor_text || '';
  const nameTranslated =
    pokemon?.names.find((n) => n.language.name === locale)?.name || pokemon?.name;

  return {
    ...pokemon,
    descriptionTranslated,
    nameTranslated,
  };
}
