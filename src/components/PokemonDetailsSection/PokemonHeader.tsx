import { Pokemon } from "../../models";
import PokemonAnimatedBG from "./PokemonAnimatedBG";
import PokemonPicture from "./PokemonPicture";

const PokemonHeader = ({ pokemon }: { pokemon: Pokemon }) => (
  <div
    className={`w-full relative flex justify-center items-center border-2 shadow-xl border-gray-400 h-28 h-xl:h-44 rounded`}
  >
    <PokemonAnimatedBG color={pokemon.color.name} className="w-full h-full" />
    <div className="absolute top-0 flex flex-col items-center w-full h-full pt-6 group">
      <PokemonPicture pokemon={pokemon} className="max-h-full animate-bounce" />
      <span className="absolute bottom-0 hidden p-2 text-xs text-white bg-black group-hover:flex bg-opacity-70">
        {pokemon.descriptionTranslated || ""}
      </span>
    </div>
  </div>
);

export default PokemonHeader;
