import * as types from "./types";

interface DefaultData {
  currentLocale: string;
  localeMap: types.LocaleMap;
  handleChangeLocale: (locale: string) => void;
}

export const defaultData: DefaultData = {
  currentLocale: "ru",
  localeMap: {},
  handleChangeLocale: () => {},
};
