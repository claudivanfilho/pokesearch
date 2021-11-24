import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { SWR_OPTIONS } from '../config/constants';

import { fetchPokemon } from '../services/api.service';

export const usePokemonSWR = () => {
  const { pokemonName } = useParams();
  const { data, error } = useSWR(
    pokemonName ? `/pokemon/${pokemonName}` : null,
    () => fetchPokemon(pokemonName!),
    SWR_OPTIONS
  );

  useEffect(() => {});

  return { pokemon: data, error };
};
