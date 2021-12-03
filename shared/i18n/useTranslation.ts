import { useContext } from "react";
import { LocaleContext } from "./LocaleContext";

interface Data {
  [key: string]: string | number;
}

export const useTranslation = (namespace: string) => {
  const { currentLocale, localeMap } = useContext(LocaleContext);

  const locale = localeMap[currentLocale];

  function t(key: string, data?: Data) {
    const str = locale[namespace][key];

    if (data) {
      return str.replace(
        /{{\s*(\w+)\s*}}/g,
        (_: string, key: string) => data[key] || ""
      );
    }

    return str;
  }

  return {
    t,
  };
};
