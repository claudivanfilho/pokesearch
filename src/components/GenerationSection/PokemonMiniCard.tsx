import { Link, useParams } from "react-router-dom";

import { Resource } from "../../models/index";

const PokemonMiniCard = ({ pokemon, isSelected }: { pokemon: Resource; isSelected: boolean }) => {
  const { generationId } = useParams();

  return (
    <Link
      to={`/generation/${generationId}/pokemon/${pokemon.name}`}
      className="flex w-full lg:w-32 xl:w-40"
    >
      <div
        className={`flex items-center h-14 lg:h-10 justify-center w-full lg:p-2 lg:px-3 m-3 mlg:m-0 shadow-md lg:shadow-lg border lg:border-0 cursor-pointer font-bold text-xs rounded-sm text-center uppercase transform hover:scale-105 ${
          isSelected
            ? "bg-purple-600 text-white font-bold"
            : "text-purple-600 hover:bg-purple-200 hover:text-purple-600"
        }`}
      >
        {pokemon.name}
      </div>
    </Link>
  );
};

export default PokemonMiniCard;
