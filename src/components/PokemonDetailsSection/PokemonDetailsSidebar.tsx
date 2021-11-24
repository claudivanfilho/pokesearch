import { useParams } from "react-router-dom";

import PokemonStats from "./PokemonStats";
import PokemonEvolutionStages from "./PokemonEvolutionStages";
import StatsLoader from "./loaders/StatsLoader";
import PokemonAnimatedThumb from "./PokemonAnimatedThumb";
import usePokemonSWR from "../../hooks/usePokemonSWR";
import EvolutionStagesLoader from "./loaders/EvolutionStagesLoader";
import PokemonThumbLoader from "./loaders/PokemonThumbLoader";

const PokemonDetailsSidebar = () => {
  const { pokemonName } = useParams();
  const { pokemon } = usePokemonSWR();
  const name = pokemon?.nameTranslated || pokemonName;

  return (
    <div className="flex flex-col">
      <h2 className="mb-3 text-3xl font-bold text-gray-600 uppercase">{name}</h2>
      {!pokemon ? <PokemonThumbLoader /> : <PokemonAnimatedThumb pokemon={pokemon} />}
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full mb-2 text-lg font-bold text-gray-600 uppercase">Mapa de evolução</h2>
        {!pokemon ? <EvolutionStagesLoader /> : <PokemonEvolutionStages pokemon={pokemon} />}
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase">Atributos</h2>
        {!pokemon ? <StatsLoader /> : <PokemonStats pokemon={pokemon} />}
      </div>
    </div>
  );
};

export default PokemonDetailsSidebar;
