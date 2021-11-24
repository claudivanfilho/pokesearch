import { ChevronRight } from "@material-ui/icons";

const EvolutionStagesLoader = () => {
  return (
    <div className="flex items-center justify-center w-full gap-4">
      <div className="w-24 px-3 py-4 border-2 border-purple-300 rounded-md shadow-lg h-28 h-xl:h-32">
        <div className="flex flex-col animate-pulse">
          <div className="w-full h-8 bg-purple-400 rounded lg:h-14"></div>
          <div className="w-full h-4 mt-3 bg-purple-400 rounded"></div>
        </div>
      </div>
      <ChevronRight fontSize="large" className="text-purple-300" />
      <div className="w-24 px-3 py-4 border-2 border-purple-300 rounded-md shadow-lg h-28 h-xl:h-32">
        <div className="flex flex-col animate-pulse">
          <div className="w-full h-8 bg-purple-400 rounded lg:h-14"></div>
          <div className="w-full h-4 mt-3 bg-purple-400 rounded"></div>
        </div>
      </div>
      <ChevronRight fontSize="large" className="text-purple-300" />
      <div className="w-24 px-3 py-4 border-2 border-purple-300 rounded-md shadow-lg h-28 h-xl:h-32">
        <div className="flex flex-col animate-pulse">
          <div className="w-full h-8 bg-purple-400 rounded lg:h-14"></div>
          <div className="w-full h-4 mt-3 bg-purple-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionStagesLoader;
