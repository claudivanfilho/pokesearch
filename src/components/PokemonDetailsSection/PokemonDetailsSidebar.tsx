import { useParams } from 'react-router-dom';

import PokemonStats from './PokemonStats';
import PokemonEvolutionStages from './PokemonEvolutionStages';
import StatsLoader from './loaders/StatsLoader';
import PokemonAnimatedThumb from './PokemonAnimatedThumb';
import { usePokemonSWR } from '../../hooks/usePokemonSWR';
import EvolutionStagesLoader from './loaders/EvolutionStagesLoader';

const PokemonDetailsSidebar = () => {
  const { pokemonName } = useParams();
  const { pokemon } = usePokemonSWR();

  // TODO make this component receive pokemon through arg and be required

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-gray-600 uppercase mb-3">{pokemonName || ''}</h2>
      <PokemonAnimatedThumb className="h-44" />
      <div className="flex flex-col mt-4 items-center">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase mb-2">Mapa de evolução</h2>
        {!pokemon ? <EvolutionStagesLoader /> : <PokemonEvolutionStages />}
      </div>
      <div className="flex flex-col mt-4 items-center">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase">Atributos</h2>
        {!pokemon ? <StatsLoader /> : <PokemonStats />}
      </div>
    </div>
  );
};

export default PokemonDetailsSidebar;
