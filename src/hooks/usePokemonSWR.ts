import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import { fetchPokemon } from "../services/api.service";

export const usePokemonSWR = () => {
  const { pokemonName } = useParams();
  const { data, error } = useSWR(
    pokemonName ? `/pokemon/${pokemonName}` : null,
    () => fetchPokemon(pokemonName!),
    { dedupingInterval: 6000000, refreshInterval: 6000000, focusThrottleInterval: 6000000 }
  );

  useEffect(() => {});

  return { pokemon: data, error };
};
