import React from "react";
import type { Props } from "@src/components/types";
import { Header } from "@src/components/layout/Header";

export const Layout: React.VFC<Props> = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
};
