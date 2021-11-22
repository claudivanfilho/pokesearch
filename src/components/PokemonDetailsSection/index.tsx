import { useParams } from 'react-router-dom';

import { usePokemon } from '../../hooks/usePokemon';
import PokemonDetailsSidebar from './PokemonDetailsSidebar';

const PokemonDetailsSection = () => {
  const { pokemonName } = useParams();
  const { pokemon, error } = usePokemon();

  if (error) {
    return <div className="w-full h-full flex text-xl">Erro ao carregar pokemon</div>;
  }
  if (!pokemonName) {
    return <div className="w-full h-full flex text-xl">Nenhum pokemon selecionado</div>;
  }

  return (
    <PokemonDetailsSidebar
      pokemon={
        pokemon || {
          name: pokemonName,
        }
      }
      loading={!pokemon}
    />
  );
};

export default PokemonDetailsSection;
