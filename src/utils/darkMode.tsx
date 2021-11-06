import React, { useState } from "react";

type Props = {
  theme: string;
};

const initialTheme = () => {
  const isUserSystemThemeDark = matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (isUserSystemThemeDark) {
    return "is-theme-dark";
  } else {
    return "is-theme-light";
  }
};

const isInitialSession = !sessionStorage.getItem("initial_session");

if (isInitialSession) {
  sessionStorage.setItem("initial_session", "0");
  sessionStorage.setItem("theme", initialTheme());
  document.documentElement.className = sessionStorage.getItem("theme");
}
sessionStorage.getItem("theme");

https://qiita.com/Nakaz/items/eb4512a0d2c751963dfe
https://zenn.dev/hrkmtsmt/articles/b4dbb052b61629
https://into-the-program.com/execution-firsttime-access/