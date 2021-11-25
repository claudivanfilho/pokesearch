import useGenerationsSWR from "../../hooks/useGenerationsSWR";
import GenerationListing from "./GenerationListing";

const GenerationsSection = () => {
  const { generations } = useGenerationsSWR();

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
