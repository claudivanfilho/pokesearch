import { GenerationResponse } from '../models/index';

const GenerationDetails = ({
  generation
}: {
  generation: GenerationResponse;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-gray-700">
        <span className="mr-2">Geração</span>
        <span>{generation.name}</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-between pr-2 mt-3">
        <h3 className="text-xl font-bold text-gray-500">
          <span className="mr-2">Região:</span>
          <span>{generation.main_region.name}</span>
        </h3>
        <h3 className="text-xl font-bold text-gray-500">
          <span>{generation.pokemon_species.length} Pokemons</span>
        </h3>
      </div>
    </div>
  );
};

export default GenerationDetails;
