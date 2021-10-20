import React, { useState } from "react";

const initialTheme = () => {
  const userSystemIsDark = matchMedia("(prefers-color-scheme: dark)").matches;
  if (userSystemIsDark === true) {
    applyTheme("is-theme-dark");
  } else {
    applyTheme("is-theme-light");
  }
};

export const Aa = () => {
  const [isDark, setIsDark] = useState("dark");
};
