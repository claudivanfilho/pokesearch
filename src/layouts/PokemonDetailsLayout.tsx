import { useParams } from 'react-router-dom';
import PokemonDetailsSection from '../components/PokemonDetailsSection';

export default function PokemonDetailsLayout() {
  const { pokemonName } = useParams();

  return (
    <div className={`col-span-3 lg:pl-5 ${pokemonName ? 'block' : 'hidden lg:block'}`}>
      <PokemonDetailsSection />
    </div>
  );
}
