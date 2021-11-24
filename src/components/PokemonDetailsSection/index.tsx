import { useParams } from 'react-router-dom';

import usePokemonSWR from '../../hooks/usePokemonSWR';
import PokemonDetailsSidebar from './PokemonDetailsSidebar';

const PokemonDetailsSection = () => {
  const { pokemonName } = useParams();
  const { error } = usePokemonSWR();

  if (error) {
    return <div className="w-full h-full flex text-xl">Erro ao carregar pokemon</div>;
  }
  if (!pokemonName) {
    return <div className="w-full h-full flex text-xl">Nenhum pokemon selecionado</div>;
  }

  return <PokemonDetailsSidebar />;
};

export default PokemonDetailsSection;
