const StatsLoader = () => {
  return (
    <div className="animate-pulse flex w-full justify-center p-8 pt-10">
      <svg viewBox="0 0 175 200" className="text-purple-500 block lg:hidden h-36 h-xl:h-44">
        <polyline
          fill="currentColor"
          id="hexagon"
          points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"
        />
      </svg>
      <svg viewBox="0 0 175 200" className="text-purple-500 hidden lg:block h-36 h-xl:h-44">
        <polyline
          fill="currentColor"
          id="hexagon"
          points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"
        />
      </svg>
    </div>
  );
};

export default StatsLoader;
