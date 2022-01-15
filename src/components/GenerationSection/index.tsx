import { useIntl } from "react-intl";

import useGenerationSWR from "../../hooks/useGenerationSWR";
import GenerationDetails from "./GenerationDetails";
import PokemonListing from "./PokemonListing";

const GenerationSection = () => {
  const { generation, error } = useGenerationSWR();
  const { formatMessage } = useIntl();

  if (error) {
    return (
      <div className="flex w-full h-full text-xl">
        {formatMessage({ id: "fetch-generation-error" })}
      </div>
    );
  }

  if (!generation) {
    return null;
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
