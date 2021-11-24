import { useIntl } from "react-intl";

import { GenerationResponse } from "../../models/index";

const GenerationDetails = ({ generation }: { generation: GenerationResponse }) => {
  const intl = useIntl();

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-gray-700">
        <span>{generation.nameTranslated}</span>
      </h2>
      <div className="flex flex-col justify-between pr-2 mt-3 lg:flex-row">
        <h3 className="text-xl font-bold text-gray-500">
          <span className="mr-2">{intl.formatMessage({ id: "regions" })}:</span>
          <span>{generation.main_region.name}</span>
        </h3>
        <h3 className="text-xl font-bold text-gray-500">
          <span>
            {generation.pokemon_species.length} {intl.formatMessage({ id: "pokemons" })}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default GenerationDetails;
