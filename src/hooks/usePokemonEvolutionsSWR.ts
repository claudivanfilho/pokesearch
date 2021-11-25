import useSWR from "swr";

import { EvolutionChainResponse, Pokemon } from "../models";

export default function usePokemonEvolutionsSWR(pokemon: Pokemon) {
  const { data, error } = useSWR<EvolutionChainResponse>(pokemon.evolution_chain.url);

  return {
    evolutions:
      data &&
      [
        data.chain.species,
        data.chain.evolves_to?.[0]?.species,
        data.chain.evolves_to?.[0]?.evolves_to?.[0]?.species,
      ].filter((e) => e),
    error,
  };
}
