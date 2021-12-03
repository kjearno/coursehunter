import { useContext, useMemo } from "react";
import { LocaleContext } from "./LocaleContext";

export function useSwitcher() {
  const { currentLocale, localeMap, handleChangeLocale } =
    useContext(LocaleContext);

  const locales = useMemo(() => Object.keys(localeMap).sort(), [localeMap]);

  return {
    currentLocale,
    locales,
    handleChangeLocale,
  };
}
