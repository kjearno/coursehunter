import { useEffect, useState } from "react";

import { defaultData } from "./defaultData";
import { LocaleContext } from "./LocaleContext";
import * as types from "./types";

interface Props {
  children: React.ReactNode;
  localeMap: types.LocaleMap;
}

export const LocaleProvider = ({ children, localeMap }: Props) => {
  const [currentLocale, setCurrentLocale] = useState(defaultData.currentLocale);

  useEffect(() => {
    const locale = localStorage.getItem("locale");

    if (locale) {
      setCurrentLocale(locale);
    }
  }, []);

  const handleChangeLocale = (locale: string) => {
    localStorage.setItem("locale", locale);
    setCurrentLocale(locale);
  };

  return (
    <LocaleContext.Provider
      value={{ currentLocale, localeMap, handleChangeLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
