import Loading from '../../Loading';
import PokemonAnimatedBG from '../PokemonAnimatedBG';

export default function PokemonThumbLoader() {
  return (
    <div
      className={`w-full relative flex justify-center items-center border-2 border-gray-400 h-44 rounded shadow`}
    >
      <PokemonAnimatedBG className="h-full w-full" />
      <div className="w-full h-full absolute top-0 flex justify-center items-center">
        <Loading size={100} />
      </div>
    </div>
  );
}
