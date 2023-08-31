import { useEffect, useState } from "react";

export type themeOptions = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<themeOptions>("light");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      setTheme("dark");
    else setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function setThemeTODark() {
    localStorage.theme = "dark";
    setTheme("dark");
  }

  function setThemeTOLight() {
    localStorage.theme = "light";
    setTheme("light");
  }

  return { setThemeTODark, setThemeTOLight, theme };
};
