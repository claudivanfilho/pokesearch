import GenerationListing from './GenerationListing';
import { useGenerationsSWR } from '../../hooks/useGenerationsSWR';

const GenerationsSection = () => {
  const { generations, error } = useGenerationsSWR();

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

export default GenerationsSection;
