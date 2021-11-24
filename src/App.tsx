import { Route, Routes } from "react-router-dom";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <LocaleProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="generation/:generationId">
            <Route path="pokemon/:pokemonName" />
          </Route>
        </Route>
      </Routes>
    </LocaleProvider>
  );
}

export default App;
