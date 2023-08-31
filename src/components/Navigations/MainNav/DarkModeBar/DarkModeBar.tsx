import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import style from "./DarkModeBar.module.css";
import { themeOptions } from "../../../../hooks/useTheme";

const DarkModeBar = ({
  selectedIndex,
  index,
  setSelectedIndex,
  theme,
  setThemeTODark,
  setThemeTOLight,
}: {
  selectedIndex: number;
  index: number;
  setSelectedIndex: (index: number) => void;
  theme: themeOptions;
  setThemeTODark: () => void;
  setThemeTOLight: () => void;
}) => {
  const isActive = selectedIndex === index;

  const toggleHovering = () => {
    selectedIndex !== index ? setSelectedIndex(index) : setSelectedIndex(-1);
  };
  return (
    <span
      className="inline-block relative"
      onClick={(event) => {
        event.stopPropagation();
        toggleHovering();
      }}
    >
      <div
        className={
          " flex cursor-pointer hover:!text-lightSecondry-400 justify-center items-center text-center text-darkPrimaryText-400"
        }
      >
        Themes
        {isActive ? (
          <AiOutlineUp className="h-3 inline-block ml-1" />
        ) : (
          <AiOutlineDown className="h-3 inline-block ml-1" />
        )}
      </div>
      {isActive && (
        <ul
          className={
            "absolute bg-lightPrimary-400 dark:bg-darkPrimary-400 p-5 items-center justify-center rounded-xl top-8 -left-1  "
          }
        >
          <li className="mb-1">
            <button
              onClick={(event) => {
                event.preventDefault();
                setThemeTOLight();
              }}
              className={
                " flex items-center justify-center hover:!text-darkSecondry-400 text-lg dark:text-darkPrimaryText-400 " +
                (theme == "light" && style["active"])
              }
            >
              <BsSunFill /> <span className="inline-block pl-2">Light</span>
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={(event) => {
                event.preventDefault();
                setThemeTODark();
              }}
              className={
                "flex items-center justify-center hover:!text-darkSecondry-400 text-lg dark:text-darkPrimaryText-400 " +
                (theme == "dark" && style["active"])
              }
            >
              <BsMoonStarsFill />
              <span className="inline-block pl-2">Dark</span>
            </button>
          </li>
        </ul>
      )}
    </span>
  );

  return <div>DarkModeBar</div>;
};

export default DarkModeBar;
