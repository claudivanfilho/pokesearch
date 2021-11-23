import { Radar } from 'react-chartjs-2';
import { usePokemonSWR } from '../../hooks/usePokemonSWR';

const PokemonStats = () => {
  const { pokemon } = usePokemonSWR();

  // TODO make this component receive pokemon through arg and be required
  if (!pokemon) return null;

  const labels = pokemon.stats?.map((stat) => stat.stat.name.replace('special', 'sp')) || [];
  const values = pokemon.stats?.map((stat) => stat.base_stat) || [];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: 'rgba(128, 90, 213, 0.6)',
        borderColor: 'rgb(128, 90, 213)',
        data: values,
      },
    ],
  };

  return (
    <>
      <div className="hidden lg:block mt-4">
        <Radar
          data={data}
          style={{ maxHeight: 'calc(100vh - 670px)' }}
          options={{ plugins: { legend: { display: false } } }}
        />
      </div>
      <div className="h-block lg:hidden mb-10">
        <Radar
          className="max-h-40"
          data={data}
          options={{ plugins: { legend: { display: false } } }}
        />
      </div>
    </>
  );
};

export default PokemonStats;
