import useSWR from "swr";

import { API_URL } from "../config/constants";
import { Resource } from "../models";

export const useGenerationsSWR = () => {
  const { data, error } = useSWR<Resource[]>(
    `${API_URL}/generation`,
    (url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((res) => res.results),
    { dedupingInterval: 6000000, refreshInterval: 6000000, focusThrottleInterval: 6000000 }
  );

  return { generations: data, error };
};
