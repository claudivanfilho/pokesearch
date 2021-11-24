import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { API_URL, SWR_OPTIONS } from '../config/constants';
import { GenerationResponse } from '../models';

export const useGenerationSWR = () => {
  const { generationId } = useParams();

  const { data, error } = useSWR<GenerationResponse>(
    generationId ? `${API_URL}/generation/${generationId}` : null,
    (url: string) => fetch(url).then((res) => res.json()),
    SWR_OPTIONS
  );

  return { generation: data, error };
};
