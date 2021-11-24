import useSWR from 'swr';

import { API_URL, SWR_OPTIONS } from '../config/constants';
import { Resource } from '../models';

export const useGenerationsSWR = () => {
  const { data, error } = useSWR<Resource[]>(
    `${API_URL}/generation`,
    (url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((res) => res.results),
    SWR_OPTIONS
  );

  return { generations: data, error };
};
