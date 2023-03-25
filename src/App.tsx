import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";

import GenerationSection from "./components/GenerationSection";
import PokemonDetailsSection from "./components/PokemonDetailsSection";
import { SWR_OPTIONS } from "./config/constants";
import { IntlProviderLocal } from "./context/IntlContextLocal";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";

/**
 * Q: Why am I not usign a ReactComponent in the 'element' prop in the nested Routes?
 *
 * A: Using only BaseLayout we can visualize in a better way the layout of the page
 * and beyond that the Breadcrumbs need to access the params throught useParams hook.
 */
export default function App() {
  return (
    <SWRConfig value={SWR_OPTIONS}>
      <LocaleProvider>
        <IntlProviderLocal>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="generation/:generationId" element={<GenerationSection />}>
                <Route path="pokemon/:pokemonName" element={<PokemonDetailsSection />} />
              </Route>
            </Route>
          </Routes>
        </IntlProviderLocal>
      </LocaleProvider>
    </SWRConfig>
  );
}
