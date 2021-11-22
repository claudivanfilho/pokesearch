import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import GenerationLayout from './layouts/GenerationLayout';
import PokemonDetailsLayout from './layouts/PokemonDetailsLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="generation/:generationId" element={<GenerationLayout />}>
          <Route path="pokemon/:pokemonName" element={<PokemonDetailsLayout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

