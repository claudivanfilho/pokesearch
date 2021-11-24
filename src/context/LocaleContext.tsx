import { createContext, FC, useState } from "react";

export const LocaleContext = createContext<{
  locale: string;
  setLocale?: (arg: string) => void;
}>({ locale: "en" });

export const LocaleProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState("en");

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
