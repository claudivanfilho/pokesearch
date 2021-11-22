import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetchPokemon } from '../services/api.service';

export const usePokemon = () => {
  const { pokemonName } = useParams();
  const { data, error } = useSWR(pokemonName ? `/pokemon/${pokemonName}` : null, () =>
    fetchPokemon(pokemonName!)
  );

  return { pokemon: data, error };
};
