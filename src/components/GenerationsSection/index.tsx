import GenerationListing from './GenerationListing';
import { useGenerations } from '../../hooks/useGenerations';

const GenerationsSection = () => {
  const { generations, error } = useGenerations();

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
