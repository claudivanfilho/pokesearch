import { useParams } from "react-router-dom";

import useGenerationSWR from "../../hooks/useGenerationSWR";
import Loading from "../Loading";
import GenerationDetails from "./GenerationDetails";
import PokemonListing from "./PokemonListing";

const GenerationSection = () => {
  const { generationId } = useParams();
  const { generation, error } = useGenerationSWR();

  if (error) {
    return <div className="flex w-full h-full text-xl">Error on fetching generation</div>;
  }

  if (!generationId) {
    return <div className="flex w-full h-full text-xl">No generation selected</div>;
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
