import { FC } from "react";
import { IntlProvider } from "react-intl";

import useLocale from "../hooks/useLocale";
import enMessages from "../lang/en.json";
import esMessages from "../lang/es.json";
import koMessages from "../lang/ko.json";

const messages: { [key: string]: { [key: string]: string } } = {
  en: enMessages,
  es: esMessages,
  ko: koMessages,
};

export const IntlProviderLocal: FC = ({ children }) => {
  const { locale } = useLocale();

  return (
    <IntlProvider locale={locale} messages={messages[locale] || messages.en}>
      {children}
    </IntlProvider>
  );
};
