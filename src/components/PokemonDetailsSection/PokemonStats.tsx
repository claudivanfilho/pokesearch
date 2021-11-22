import { Radar } from 'react-chartjs-2';

import { Pokemon } from '../../models/index';

const PokemonStats = ({ pokemon }: { pokemon: Partial<Pokemon> }) => {
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
    <div className="px-5">
      <Radar
        data={data}
        className="h-28 lg:h-40"
        options={{ plugins: { legend: { display: false } } }}
      />
    </div>
  );
};

export default PokemonStats;
