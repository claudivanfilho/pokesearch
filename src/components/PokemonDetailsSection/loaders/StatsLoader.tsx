const StatsLoader = () => {
  return (
    <div className="animate-pulse flex w-full justify-center mt-4">
      <svg
        style={{ maxHeight: "calc(100vh - 600px)" }}
        viewBox="0 0 175 200"
        className="text-purple-500"
      >
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
