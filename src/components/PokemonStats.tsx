import { Pokemon } from '../models/index';
import { Radar } from 'react-chartjs-2';

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  const labels = pokemon.stats?.map((stat) => stat.stat.name) || [];
  const values = pokemon.stats?.map((stat) => stat.base_stat) || [];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: 'rgba(128, 90, 213, 0.6)',
        borderColor: 'rgb(128, 90, 213)',
        data: values
      }
    ]
  };
  return (
    <div className="px-5">
      <Radar data={data} options={{ legend: { display: false } }} />
    </div>
  );
};

export default PokemonStats;
