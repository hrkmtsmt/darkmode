import React from "react";
import type { AppProps } from "next/app";
import { ResetCSS } from "@src/styles/ReseCSS";
import { GlobalStyle } from "@src/styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ResetCSS />
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
export default MyApp;
