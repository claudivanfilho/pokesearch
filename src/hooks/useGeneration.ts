import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { API_URL } from '../config/constants';
import { GenerationResponse } from '../models';

export const useGeneration = () => {
  const { generationId } = useParams();

  const { data, error } = useSWR<GenerationResponse>(
    generationId ? `${API_URL}/generation/${generationId}` : null,
    (url: string) => fetch(url).then((res) => res.json())
  );

  return { generation: data, error };
};
