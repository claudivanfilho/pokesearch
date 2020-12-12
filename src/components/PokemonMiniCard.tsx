import { Link, useParams } from 'react-router-dom';
import { Resource } from '../models/index';

const PokemonMiniCard = ({
  pokemon,
  isSelected
}: {
  pokemon: Resource;
  isSelected: boolean;
}) => {
  const { id } = useParams<{
    id: string;
  }>();

  return (
    <Link
      to={`/generation/${id}/pokemon/${pokemon.name}`}
      className="flex w-full lg:w-40"
    >
      <div
        key={pokemon.name}
        className={`flex items-center h-20 lg:h-10 justify-center w-full lg:w-40 p-2 px-3 border border-purple-300 m-2 rounded-lg text-center uppercase hover:bg-purple-600 hover:text-white cursor-pointer text-xs ${
          isSelected ? 'bg-purple-600 text-white font-bold' : 'text-purple-600'
        }`}
      >
        {pokemon.name}
      </div>
    </Link>
  );
};

export default PokemonMiniCard;
