import { ChevronRight } from "@material-ui/icons";

import { usePokemonSWR } from "../../hooks/usePokemonSWR";
import EvolutionStagesLoader from "./loaders/EvolutionStagesLoader";
import PokemonStageCard from "./PokemonStageCard";

const PokemonEvolutionStages = () => {
  const { pokemon } = usePokemonSWR();
  if (!pokemon) {
    return <EvolutionStagesLoader />;
  }

  if (!pokemon) {
    return null;
  }

  return (
    <div className={`flex w-full lg:gap-3 justify-center items-center`}>
      {pokemon.evolutions?.[0] && (
        <PokemonStageCard stage={pokemon.evolutions?.[0]} className="w-1/4" />
      )}
      {pokemon.evolutions?.[1] && <ChevronRight fontSize="large" />}
      {pokemon.evolutions?.[1] && (
        <PokemonStageCard stage={pokemon.evolutions?.[1]} className="w-1/4" />
      )}
      {pokemon.evolutions?.[2] && <ChevronRight fontSize="large" />}
      {pokemon.evolutions?.[2] && (
        <PokemonStageCard stage={pokemon.evolutions?.[2]} className="w-1/4" />
      )}
    </div>
  );
};

export default PokemonEvolutionStages;
