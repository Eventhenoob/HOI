import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

import { themeOptions } from "../../hooks/useTheme";
const DarkModeToggler = ({
  isVisible,
  theme,
  setThemeTODark,
  setThemeTOLight,
}: {
  isVisible: boolean;
  theme: themeOptions;
  setThemeTODark: () => void;
  setThemeTOLight: () => void;
}) => {
  const toggleTheme = () => {
    theme === "dark" ? setThemeTOLight() : setThemeTODark();
  };

  return (
    <button
      className={
        "fixed z-50 bottom-7 right-4 w-14 h-14 transition-all duration-500 rounded-full hover:text-lightSecondry-400 flex justify-center items-center " +
        (isVisible ? " translate-x-0 " : " translate-x-32 ") +
        (theme !== "light"
          ? "bg-lightPrimary-400 "
          : "bg-darkPrimary-400 text-darkPrimaryText-400")
      }
      onClick={() => {
        localStorage.theme = theme === "dark" ? "light" : "dark";
        toggleTheme();
      }}
    >
      {theme === "light" ? (
        <BsMoonStarsFill size={"20px"} />
      ) : (
        <BsSunFill size={"20px"} />
      )}
    </button>
  );
};

export default DarkModeToggler;
