import "svgxuse";
import "../styles/globals.scss";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

import { Preloader } from "../components";
import { LocaleProvider } from "../shared/i18n";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <LocaleProvider localeMap={pageProps.localeMap}>
      <Preloader>{getLayout(<Component {...pageProps} />)}</Preloader>
    </LocaleProvider>
  );
}
