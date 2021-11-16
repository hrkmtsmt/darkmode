import React from "react";
import { Layout } from "@src/components/layout/Layout";

import { ThemeSwitch } from "@src/components/ThemeSwitch";

export default function Home() {
  return (
    <Layout>
      <ThemeSwitch />
    </Layout>
  );
}
