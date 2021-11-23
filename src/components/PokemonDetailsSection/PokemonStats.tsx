import { Radar } from "react-chartjs-2";
import { usePokemonSWR } from "../../hooks/usePokemonSWR";

const PokemonStats = () => {
  const { pokemon } = usePokemonSWR();

  if (!pokemon) return null;

  const labels = pokemon.stats?.map((stat) => stat.stat.name.replace("special", "sp")) || [];
  const values = pokemon.stats?.map((stat) => stat.base_stat) || [];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: "rgba(128, 90, 213, 0.6)",
        borderColor: "rgb(128, 90, 213)",
        data: values,
      },
    ],
  };

  return (
    <Radar
      data={data}
      style={{ maxHeight: "calc(100vh - 570px)" }}
      options={{ plugins: { legend: { display: false } } }}
    />
  );
};

export default PokemonStats;
