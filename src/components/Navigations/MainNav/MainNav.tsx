import { useEffect, useState } from "react";
import DarkModeBar from "./DarkModeBar";
import NavigationDropList from "./NavigationDropList/NavigationDropList";
import { themeOptions } from "../../../hooks/useTheme";

interface Props {
  theme: themeOptions;
  setThemeTODark: () => void;
  setThemeTOLight: () => void;
}

const MainNav = ({ setThemeTOLight, setThemeTODark, theme }: Props) => {
  const [currentSelected, setCurrentSelected] = useState(-1);

  const setCurrentSelectedIndex = (index: number) => {
    setCurrentSelected(index);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setCurrentSelected(-1);
    });
  }, []);

  return (
    <nav className="flex justify-between lg:pl-10 lg:pr-14 md:pl-5 md:pr-7 items-center absolute top-0 left-0 w-screen h-20 z-10 bg-yellow-400 ">
      <a href="/" className="w-fit">
        <img src="\logo-Trans.png" className="w-20" alt="HOI logo" />
      </a>
      <NavigationDropList
        setSelectedIndex={setCurrentSelected}
        selectedIndex={currentSelected}
      />
      <DarkModeBar
        setThemeTOLight={setThemeTOLight}
        setThemeTODark={setThemeTODark}
        theme={theme}
        setSelectedIndex={setCurrentSelectedIndex}
        index={2}
        selectedIndex={currentSelected}
      />
    </nav>
  );
};

export default MainNav;
