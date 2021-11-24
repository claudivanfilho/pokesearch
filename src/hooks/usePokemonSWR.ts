import { useParams } from "react-router-dom";
import useSWR from "swr";

import { SWR_OPTIONS } from "../config/constants";
import { fetchPokemon } from "../services/api.service";
import { normalizePokemon } from "../services/dto.service";
import useLocale from "./useLocale";

/**
 * @param pName if pName is not provided it will assume the the name of the pokemon
 * is the same from the url params
 */
export default function usePokemonSWR(pName?: string) {
  const { pokemonName } = useParams();
  const name = pName || pokemonName;
  const { locale } = useLocale();
  const { data, error } = useSWR(`/pokemon/${name}`, () => fetchPokemon(name!), SWR_OPTIONS);

  return {
    pokemon: data && normalizePokemon(data, locale),
    error,
  };
}
