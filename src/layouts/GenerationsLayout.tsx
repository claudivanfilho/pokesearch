import useSWR from 'swr';

import GenerationListing from '../components/GenerationListing';
import CONSTANTS from '../config/constants';
import { generationsFetcher } from '../services/apiService';

const GenerationsLayout = () => {
  const { data: { results: generations } = { results: [] }, error } = useSWR(
    `${CONSTANTS.apiUrl}/generation`,
    generationsFetcher
  );

  if (error) {
    return <div>Error on loading generations</div>;
  }

  if (!generations) {
    return <div>Loading generations</div>;
  }

  return (
    <>
      <h3 className="text-3xl mb-3 font-bold text-gray-700">Gerações</h3>
      <GenerationListing generations={generations} />
    </>
  );
};

export default GenerationsLayout;
