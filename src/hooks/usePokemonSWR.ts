import { useParams } from "react-router-dom";
import useSWR from "swr";

import { SWR_OPTIONS } from "../config/constants";
import { fetchPokemon } from "../services/api.service";
import { normalizePokemon } from "../services/dto.service";
import useLocale from "./useLocale";

export default function usePokemonSWR() {
  const { pokemonName } = useParams();
  const { locale } = useLocale();
  const { data, error } = useSWR(
    pokemonName ? `/pokemon/${pokemonName}` : null,
    () => fetchPokemon(pokemonName!),
    SWR_OPTIONS
  );

  return {
    pokemon: data && normalizePokemon(data, locale),
    error,
  };
}
