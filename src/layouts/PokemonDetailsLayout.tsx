import { RouteComponentProps } from 'react-router-dom';
import useSWR from 'swr';

import PokemonDetailsSidebar from '../components/PokemonDetailsSidebar';
import { getPokemon } from '../services/apiService';

const PokemonDetailsLayout = ({
  match: {
    params: { name }
  }
}: RouteComponentProps<{
  id?: string;
  name?: string;
}>) => {
  const { data: pokemon, error } = useSWR(
    name ? `/pokemon/${name}` : null,
    () => getPokemon({ name })
  );

  if (error) {
    return (
      <div className="w-full h-full flex text-xl">
        Erro ao carregaar pokemon
      </div>
    );
  }
  if (!name) {
    return (
      <div className="w-full h-full flex text-xl">
        Nenhum pokemon selecionado
      </div>
    );
  }

  return (
    <PokemonDetailsSidebar
      pokemon={
        pokemon || {
          name
        }
      }
      loading={!pokemon}
    />
  );
};

export default PokemonDetailsLayout;
