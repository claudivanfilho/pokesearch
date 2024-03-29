import Loading from './Loading';
import PokemonBG from './PokemonBG';
import { Pokemon } from '../models/index';

const PokemonAnimatedThumb = ({
  pokemon,
  loading,
  className
}: {
  pokemon: Pokemon;
  loading: boolean;
  className: string;
}) => {
  return (
    <div
      className={`w-full h-full relative flex justify-center items-center border-2 border-gray-400 ${className} rounded shadow`}
    >
      <PokemonBG
        pokemon={(pokemon.color && pokemon) || { color: {} }}
        className="h-full w-full"
      />
      {loading ? (
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <Loading size={100} />
        </div>
      ) : (
        <div className="w-full h-full absolute top-0 pt-6 flex justify-center">
          <img
            alt={pokemon.name}
            className="object-scale-down max-h-full animate-bounce"
            src={
              pokemon?.sprites?.other.dream_world.front_default ||
              pokemon?.sprites?.other['official-artwork'].front_default
            }
            width="200"
          />
        </div>
      )}
    </div>
  );
};

export default PokemonAnimatedThumb;
