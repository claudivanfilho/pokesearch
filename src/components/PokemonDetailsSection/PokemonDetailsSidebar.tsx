import { useParams } from 'react-router-dom';

import PokemonStats from './PokemonStats';
import PokemonEvolutionStages from './PokemonEvolutionStages';
import StatsLoader from './loaders/StatsLoader';
import PokemonAnimatedThumb from './PokemonAnimatedThumb';
import usePokemonSWR from '../../hooks/usePokemonSWR';
import EvolutionStagesLoader from './loaders/EvolutionStagesLoader';
import PokemonThumbLoader from './loaders/PokemonThumbLoader';

const PokemonDetailsSidebar = () => {
  const { pokemonName } = useParams();
  const { pokemon } = usePokemonSWR();
  const name = pokemon?.nameTranslated || pokemonName;

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-gray-600 uppercase mb-3">{name}</h2>
      {!pokemon ? <PokemonThumbLoader /> : <PokemonAnimatedThumb pokemon={pokemon} />}
      <div className="flex flex-col mt-4 items-center">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase mb-2">Mapa de evolução</h2>
        {!pokemon ? <EvolutionStagesLoader /> : <PokemonEvolutionStages pokemon={pokemon} />}
      </div>
      <div className="flex flex-col mt-4 items-center">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase">Atributos</h2>
        {!pokemon ? <StatsLoader /> : <PokemonStats pokemon={pokemon} />}
      </div>
    </div>
  );
};

export default PokemonDetailsSidebar;
