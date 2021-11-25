import { createContext, FC, useState } from "react";

type LocaleContextType = {
  locale: string;
  setLocale: (arg: string) => void;
};

export const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
} as LocaleContextType);

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
