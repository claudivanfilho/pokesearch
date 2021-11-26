import { FC } from 'react';
import { IntlProvider } from 'react-intl';
import { Outlet, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { SWR_OPTIONS } from './config/constants';
import { LocaleProvider } from './context/LocaleContext';
import useLocale from './hooks/useLocale';
import enMessages from './lang/en.json';
import esMessages from './lang/es.json';
import koMessages from './lang/ko.json';
import BaseLayout from './layouts/BaseLayout';

const messages: { [key: string]: { [key: string]: string } } = {
  en: enMessages,
  es: esMessages,
  ko: koMessages,
};

const IntlProviderLocal: FC = ({ children }) => {
  const { locale } = useLocale();

  return (
    <IntlProvider locale={locale} messages={messages[locale] || messages.en}>
      {children}
    </IntlProvider>
  );
};

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
