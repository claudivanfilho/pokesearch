import PokemonStats from './PokemonStats';
import PokemonEvolutionStages from './PokemonEvolutionStages';
import { Pokemon } from '../models/index';
import StatsLoader from './loaders/StatsLoader';
import PokemonAnimatedThumb from './PokemonAnimatedThumb';

const PokemonDetailsSidebar = ({
  pokemon,
  loading
}: {
  pokemon: Pokemon;
  loading: boolean;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-gray-600 uppercase mb-3">
        {pokemon?.name}
      </h2>
      <PokemonAnimatedThumb
        pokemon={pokemon}
        loading={loading}
        className="h-44"
      />
      <div className="flex flex-col mt-4 items-center">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase mb-2">
          Mapa de evolução
        </h2>
        <PokemonEvolutionStages pokemon={pokemon} loading={loading} />
      </div>
      <div className="flex flex-col mt-4 items-center">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase">
          Atributos
        </h2>
        {loading ? (
          <StatsLoader />
        ) : (
          pokemon.stats && <PokemonStats pokemon={pokemon} />
        )}
      </div>
    </div>
  );
};

export default PokemonDetailsSidebar;
