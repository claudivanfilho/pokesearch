import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="generation/:generationId">
          <Route path="pokemon/:pokemonName" />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
