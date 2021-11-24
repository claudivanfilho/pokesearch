import { IntlProvider } from "react-intl";
import { Route, Routes } from "react-router-dom";

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
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="generation/:generationId">
            <Route path="pokemon/:pokemonName" />
          </Route>
        </Route>
      </Routes>
    </IntlProvider>
  );
}

export default App;
