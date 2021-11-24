import { Pokemon } from '../../models';
import PokemonAnimatedBG from './PokemonAnimatedBG';

const PokemonAnimatedThumb = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div
      className={`w-full relative flex justify-center items-center border-2 shadow-xl border-gray-400 h-28 h-xl:h-44 rounded`}
    >
      <PokemonAnimatedBG color={pokemon.color.name} className="h-full w-full" />
      <div className="w-full h-full absolute top-0 pt-6 flex justify-center">
        <img
          alt={pokemon.name}
          className="object-scale-down max-h-full animate-bounce"
          src={
            pokemon.sprites?.other.dream_world.front_default ||
            pokemon.sprites?.other['official-artwork'].front_default
          }
          width="200"
        />
      </div>
    </div>
  );
};

export default PokemonAnimatedThumb;
