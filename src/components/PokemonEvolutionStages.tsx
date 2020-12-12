import { Pokemon } from '../models/index';
import { ChevronRight } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import EvolutionStagesLoader from './loaders/EvolutionStagesLoader';
import PokemonStageCard from './PokemonStageCard';

const PokemonEvolutionStages = ({
  pokemon,
  loading
}: {
  pokemon: Pokemon;
  loading: boolean;
}) => {
  const [width, setWidth] = useState('w-full');

  useEffect(() => {
    if (pokemon.evolution) {
      if (pokemon.evolution.stage2 && pokemon.evolution.stage3) {
        setWidth('w-1/4');
      } else if (pokemon.evolution.stage2) {
        setWidth('w-1/3');
      }
    }
  }, [pokemon]);

  if (loading) {
    return <EvolutionStagesLoader />;
  }

  if (!pokemon.evolution?.stage2) {
    return (
      <h2 className="text-md text-gray-600 mt-2 w-full text-center">
        Não possui
      </h2>
    );
  }
  return (
    <div
      className={`flex w-full ${
        !pokemon.evolution.stage3 ? 'justify-center' : 'justify-between'
      } items-center`}
    >
      <PokemonStageCard stage={pokemon.evolution.stage1} width={width} />
      {pokemon.evolution.stage2 && <ChevronRight fontSize="large" />}
      {pokemon.evolution.stage2 && (
        <PokemonStageCard stage={pokemon.evolution.stage2} width={width} />
      )}
      {pokemon.evolution.stage3 && <ChevronRight fontSize="large" />}
      {pokemon.evolution.stage3 && (
        <PokemonStageCard stage={pokemon.evolution.stage3} width={width} />
      )}
    </div>
  );
};

export default PokemonEvolutionStages;
