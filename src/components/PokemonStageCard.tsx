import { Link, useParams } from 'react-router-dom';
import { PokemonResponse } from '../models/index';

const PokemonStageCard = ({
  stage,
  width = 'w-full'
}: {
  stage: PokemonResponse;
  width?: string;
}) => {
  const params = useParams<{ id: string }>();

  return (
    <Link
      to={`/generation/${params.id}/pokemon/${stage.name}`}
      className={`flex ${width} hover:bg-purple-200 border hover:border-purple-800 rounded transform hover:scale-110`}
    >
      <div
        className={`flex w-full flex-col h-32 items-center justify-between py-4 px-2 shadow cursor-pointer`}
      >
        <img
          alt={stage.name}
          src={
            stage?.sprites?.other.dream_world.front_default ||
            stage?.sprites?.other['official-artwork'].front_default
          }
          className="max-h-16 object-scale-down w-14 md:w-20"
        />
        <span className="mt-2 text-gray-600 text-xs md:text-sm">
          {stage.name}
        </span>
      </div>
    </Link>
  );
};

export default PokemonStageCard;
