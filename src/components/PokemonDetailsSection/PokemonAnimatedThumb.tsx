import { usePokemonSWR } from "../../hooks/usePokemonSWR";
import Loading from "../Loading";
import PokemonBG from "./PokemonBG";

const PokemonAnimatedThumb = ({ className }: { className: string }) => {
  const { pokemon } = usePokemonSWR();

  return (
    <div
      className={`w-full h-full relative flex justify-center items-center border-2 border-gray-400 ${className} rounded shadow`}
    >
      <PokemonBG className="h-full w-full" />
      {!pokemon ? (
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <Loading size={100} />
        </div>
      ) : (
        <div className="w-full h-full absolute top-0 pt-6 flex justify-center">
          <img
            alt={pokemon?.name}
            className="object-scale-down max-h-full animate-bounce"
            src={
              pokemon?.sprites?.other.dream_world.front_default ||
              pokemon?.sprites?.other["official-artwork"].front_default
            }
            width="200"
          />
        </div>
      )}
    </div>
  );
};

export default PokemonAnimatedThumb;
