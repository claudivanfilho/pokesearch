import useSWR from 'swr';

import { API_URL } from '../config/constants';
import { Resource } from '../models';

export const useGenerations = () => {
  const { data, error } = useSWR<Resource[]>(`${API_URL}/generation`, (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .then((res) => res.results)
  );

  return { generations: data, error };
};
