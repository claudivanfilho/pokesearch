import { IntlProvider } from "react-intl";
import { Outlet, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";

import { SWR_OPTIONS } from "./config/constants";
import useLocale from "./hooks/useLocale";
import enMessages from "./lang/en.json";
import esMessages from "./lang/es.json";
import koMessages from "./lang/ko.json";
import BaseLayout from "./layouts/BaseLayout";

const messages: { [key: string]: { [key: string]: string } } = {
  en: enMessages,
  es: esMessages,
  ko: koMessages,
};

function App() {
  const { locale } = useLocale();

  return (
    <SWRConfig
      value={{
        ...SWR_OPTIONS,
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <IntlProvider locale={locale} messages={messages[locale] || messages.en}>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="generation/:generationId" element={<Outlet />}>
              <Route path="pokemon/:pokemonName" element={<Outlet />} />
            </Route>
          </Route>
        </Routes>
      </IntlProvider>
    </SWRConfig>
  );
}

export default App;
