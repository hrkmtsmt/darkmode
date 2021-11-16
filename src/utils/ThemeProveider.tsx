import React, { useState, useEffect } from "react";

type Props = {
  theme: string;
};

const isUserSystemThemeDark = matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const initialTheme = () => {
  if (isUserSystemThemeDark) {
    return "is-theme-dark";
  } else {
    return "is-theme-light";
  }
};
let rootElement: string | null = document.documentElement.className;
const applyTheme = (themeName: string) => {
  sessionStorage.setItem("theme", themeName);
  rootElement = themeName;
};

if (isInitialSession) {
  sessionStorage.setItem("initial_session", "0");
  sessionStorage.setItem("theme", initialTheme());
  rootElement = sessionStorage.getItem("theme");
}
sessionStorage.getItem("theme");

export const ThemeProvider = (props: string) => {
  const isInitialSession = !sessionStorage.getItem("initial_session");
  useEffect(() => {
    initialTheme();
  }, []);
  return <React.Fragment></React.Fragment>;
};
