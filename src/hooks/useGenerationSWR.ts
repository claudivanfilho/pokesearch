import { useParams } from "react-router-dom";
import useSWR from "swr";

import { API_URL, SWR_OPTIONS } from "../config/constants";
import { GenerationResponse } from "../models";
import { normalizeGeneration } from "../services/dto.service";
import useLocale from "./useLocale";

export default function useGenerationSWR() {
  const { generationId } = useParams();
  const { locale } = useLocale();
  const { data, error } = useSWR<GenerationResponse>(
    generationId ? `${API_URL}/generation/${generationId}` : null,
    (url: string) => fetch(url).then((res) => res.json()),
    SWR_OPTIONS
  );

  return { generation: data && normalizeGeneration(data, locale), error };
}
