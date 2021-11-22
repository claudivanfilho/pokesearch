import { ChevronRight } from '@material-ui/icons';

const EvolutionStagesLoader = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <div className="border-2 border-purple-300 shadow-lg rounded-md py-4 px-3 w-24 h-32">
        <div className="animate-pulse flex flex-col">
          <div className="rounded bg-purple-400 h-14 w-full"></div>
          <div className="h-4 bg-purple-400 rounded w-full mt-3"></div>
        </div>
      </div>
      <ChevronRight fontSize="large" className="text-purple-300" />
      <div className="border-2 border-purple-300 shadow-lg rounded-md py-4 px-3 w-24 h-32">
        <div className="animate-pulse flex flex-col">
          <div className="rounded bg-purple-400 h-14 w-full"></div>
          <div className="h-4 bg-purple-400 rounded w-full mt-3"></div>
        </div>
      </div>
      <ChevronRight fontSize="large" className="text-purple-300" />
      <div className="border-2 border-purple-300 shadow-lg rounded-md py-4 px-3 w-24 h-32">
        <div className="animate-pulse flex flex-col">
          <div className="rounded bg-purple-400 h-14 w-full"></div>
          <div className="h-4 bg-purple-400 rounded w-full mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionStagesLoader;
