import { useParams } from "react-router-dom";

import GenerationDetails from "./GenerationDetails";
import PokemonListing from "./PokemonListing";
import Loading from "../Loading";
import useGenerationSWR from "../../hooks/useGenerationSWR";

const GenerationSection = () => {
  const { generationId } = useParams();
  const { generation, error } = useGenerationSWR();

  if (error) {
    return <div className="flex w-full h-full text-xl">Erro ao buscar geração</div>;
  }

  if (!generationId) {
    return <div className="flex w-full h-full text-xl">Nenhuma geração selecionada</div>;
  }

  if (!generation) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loading size={100} />
      </div>
    );
  }

  return (
    <>
      <GenerationDetails generation={generation} />
      <div className="mt-3">
        <PokemonListing pokemons={generation.pokemon_species} />
      </div>
    </>
  );
};

export default GenerationSection;
