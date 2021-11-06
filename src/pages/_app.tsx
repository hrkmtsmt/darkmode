import React from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@src/styles/style";
import "destyle.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
export default MyApp;
