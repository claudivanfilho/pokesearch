import { useParams } from "react-router-dom";

import usePokemonSWR from "../../hooks/usePokemonSWR";
import PokemonDetailsSidebar from "./PokemonDetailsSidebar";

const PokemonDetailsSection = () => {
  const { pokemonName } = useParams();
  const { error } = usePokemonSWR();

  if (error) {
    return <div className="flex w-full h-full text-xl">Erro ao carregar pokemon</div>;
  }
  if (!pokemonName) {
    return <div className="flex w-full h-full text-xl">Nenhum pokemon selecionado</div>;
  }

  return <PokemonDetailsSidebar />;
};

export default PokemonDetailsSection;
