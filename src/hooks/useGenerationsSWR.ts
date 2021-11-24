import useSWR from 'swr';

import { API_URL, SWR_OPTIONS } from '../config/constants';
import { GenerationResponse } from '../models';
import { fetchGenerations } from '../services/api.service';
import { normalizeGeneration } from '../services/dto.service';
import useLocale from './useLocale';

export default function useGenerationsSWR() {
  const { locale } = useLocale();
  const { data, error } = useSWR<GenerationResponse[]>(
    `${API_URL}/generation`,
    () => fetchGenerations(),
    SWR_OPTIONS
  );

  return {
    generations: data && data.map((g) => normalizeGeneration(g, locale)),
    error,
  };
}
