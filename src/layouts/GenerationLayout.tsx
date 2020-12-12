import { RouteComponentProps } from 'react-router-dom';

import GenerationDetails from '../components/GenerationDetails';
import PokemonListing from '../components/PokemonListing';
import useSWR from 'swr';
import { fetcher } from '../services/apiService';
import CONSTANTS from '../config/constants';
import Loading from '../components/Loading';

const GenerationLayout = ({
  match: {
    params: { id: generationID }
  }
}: RouteComponentProps<{
  id?: string;
  name?: string;
}>) => {
  const { data: generation, error } = useSWR(
    generationID ? `${CONSTANTS.apiUrl}/generation/${generationID}` : null,
    fetcher
  );

  if (error) {
    return (
      <div className="w-full h-full flex text-xl">Erro ao buscar geração</div>
    );
  }

  if (!generationID) {
    return (
      <div className="w-full h-full flex text-xl">
        Nenhuma geração selecionada
      </div>
    );
  }

  if (!generation) {
    return (
      <div className="w-full h-full flex items-center justify-center">
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

export default GenerationLayout;
