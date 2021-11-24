import GenerationListing from "./GenerationListing";
import useGenerationsSWR from "../../hooks/useGenerationsSWR";

const GenerationsSection = () => {
  const { generations, error } = useGenerationsSWR();

  console.log(generations);

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
