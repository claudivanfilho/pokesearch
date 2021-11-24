import useGenerationsSWR from "../../hooks/useGenerationsSWR";
import GenerationListing from "./GenerationListing";

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
      <h3 className="mb-3 text-3xl font-bold text-gray-700">Generations</h3>
      <GenerationListing generations={generations} />
    </>
  );
};

export default GenerationsSection;
