import { useEffect, useState } from "react";
import NavigationDropList from "./NavigationDropList/NavigationDropList";

const FullNav = () => {
  const [currentSelected, setCurrentSelected] = useState(-1);

  useEffect(() => {
    window.addEventListener("click", () => {
      setCurrentSelected(-1);
    });
  }, []);

  return (
    <nav
      className={
        "flex justify-between lg:pl-10 absolute lg:pr-14 md:pl-5 md:pr-7 bg-opacity-75 items-center top-0 left-0 w-screen h-20 z-10 "
        // + (isNavigationActive ? " bg-slate-900 fixed " : " absolute ")
      }
    >
      <div className="flex justify-center items-center">
        <a href="/" className="w-fit">
          <img src="\logo-full.png" className="w-24" alt="HOI logo" />
        </a>
      </div>

      <NavigationDropList
        setSelectedIndex={setCurrentSelected}
        selectedIndex={currentSelected}
      />
    </nav>
  );
};

export default FullNav;
