import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { VscListSelection } from "react-icons/vsc";
import SubDrop, { subComponentTemplate } from "./SubDrop";
import { Link } from "react-router-dom";

const SecondryNav = ({ isVisible }: { isVisible: boolean }) => {
  const [showNav, setShowNav] = useState(false);

  const updateSubItems: subComponentTemplate[] = [
    { link: "#", text: "Trending" },
    { link: "#", text: "Blogs" },
  ];

  const liStyles =
    "p-1  text-xl transition-all duration-300 hover:!text-lightSecondry-400 dark:text-darkPrimaryText-400";
  return (
    <>
      <button
        className={
          "flex items-center justify-center navToggler fixed top-5 right-4 z-50 w-14 h-14  transition-all duration-500 ease-in-out dark:text-darkSecondry-400 text-lightPrimaryText-400 rounded-full drop-shadow-md bg-lightPrimary-400 dark:bg-darkPrimary-400 " +
          (!isVisible ? "-translate-y-28" : "translate-y-0")
        }
        onClick={() => setShowNav((prev) => !prev)}
      >
        {showNav ? (
          <RxCross1 size={"20px"} />
        ) : (
          <VscListSelection size={"20px"} />
        )}
      </button>

      <nav
        className={
          "fixed flex justify-center items-center top-0 left-0 w-screen h-screen z-40 transition-all duration-1000 bg-lightPrimary-400 dark:bg-darkPrimary-400 ease-in-out " +
          (!showNav ? "-translate-y-full" : "")
        }
      >
        <ul className="flex flex-col items-start justify-start">
          <li className={liStyles}>
            <a href="#">Contact Us</a>
          </li>
          <li className={liStyles}>
            <a href="#">Services</a>
          </li>
          <li className={liStyles}>
            <a href="#">
              <SubDrop
                mainTitle="Updates"
                subItems={updateSubItems}
                styles=""
              />
            </a>
          </li>
          <li className={liStyles}>
            <Link to="things-happening">Things Happening</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SecondryNav;
