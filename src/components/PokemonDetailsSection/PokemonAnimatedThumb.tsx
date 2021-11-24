import { Pokemon } from "../../models";
import PokemonAnimatedBG from "./PokemonAnimatedBG";

const PokemonAnimatedThumb = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div
      className={`w-full relative flex justify-center items-center border-2 shadow-xl border-gray-400 h-28 h-xl:h-44 rounded`}
    >
      <PokemonAnimatedBG color={pokemon.color.name} className="w-full h-full" />
      <div className="absolute top-0 flex flex-col items-center w-full h-full pt-6 group">
        <img
          alt={pokemon.name}
          className="object-scale-down max-h-full animate-bounce"
          src={
            pokemon.sprites?.other.dream_world.front_default ||
            pokemon.sprites?.other["official-artwork"].front_default
          }
          width="200"
        />
        <span className="absolute bottom-0 hidden p-2 text-xs text-white bg-black group-hover:flex bg-opacity-70">
          {pokemon.descriptionTranslated || ""}
        </span>
      </div>
    </div>
  );
};

export default PokemonAnimatedThumb;
