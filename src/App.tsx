import { Outlet, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";

import { SWR_OPTIONS } from "./config/constants";
import { IntlProviderLocal } from "./context/IntlContextLocal";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";

/**
 * Q: Why i am not usign the 'element' prop in the nested Routes?
 *
 * A: Using only BaseLayout we can visualize in a better way the layout of the page
 * and beyond that as the routes are few we can use this approach.
 */
export default function App() {
  return (
    <SWRConfig value={SWR_OPTIONS}>
      <LocaleProvider>
        <IntlProviderLocal>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="generation/:generationId" element={<Outlet />}>
                <Route path="pokemon/:pokemonName" element={<Outlet />} />
              </Route>
            </Route>
          </Routes>
        </IntlProviderLocal>
      </LocaleProvider>
    </SWRConfig>
  );
}
