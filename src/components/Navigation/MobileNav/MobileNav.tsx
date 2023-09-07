import { useEffect, useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsGear } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { MdUpdate } from "react-icons/md";
import { CgTrending } from "react-icons/cg";
import { BiLogoBlogger } from "react-icons/bi";
import { ulItemsTemplate } from "./DropList/DropList";
import DropList from "./DropList";

const updateDropListItems: ulItemsTemplate[] = [
  { link: "#", text: "Treanding", icon: <CgTrending /> },
  { link: "#", text: "Blogs", icon: <BiLogoBlogger /> },
];

const MobileNav = () => {
  const [isNavigationActive, setNavigationActive] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      setNavigationActive(false);
    });
  }, []);
  return (
    <nav className="flex fixed z-50 items-start top-0 left-0 w-full">
      <div className="pt-4 pb-4 flex w-full bg-slate-800 bg-opacity-70">
        <button
          onClick={(event) => {
            event.stopPropagation();
            setNavigationActive((prev) => !prev);
          }}
          className="nav-toggler flex justify-center items-center text-white-400 hover:bg-slate-200 hover:bg-opacity-20 text-lg active:bg-opacity-70 transition-all duration-300 mr-4  ml-4 w-8 h-8 rounded-full"
        >
          <FaBarsStaggered />
        </button>
        <a href="/" className="">
          <p className="font-serif text-2xl  text-white-400">HOI</p>
          {/* <img src="./logo-full.png" alt="website logo" className="w-24" /> */}
        </a>
      </div>

      <ul
        className={
          "nav-list bg-bg-400 absolute top-0 left-0 -z-20 h-screen w-56  pt-20 transition-all duration-700 " +
          (isNavigationActive ? "translate-x-0" : "-translate-x-full")
        }
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <li className={"navItems "}>
          <a
            className="cursor-pointer text-xl active:bg-opacity-50 active:bg-slate-200 text-white-400 items-center flex w-full h-full p-3 hover:bg-slate-700"
            href="about-us"
          >
            <AiOutlineTeam />
            <span className="ml-4 block ">About Us</span>
          </a>
        </li>

        <li className={"navItems "}>
          <a
            className="cursor-pointer text-xl items-center active:bg-opacity-50 active:bg-slate-200 p-3 text-white-400 flex w-full h-full hover:bg-slate-700"
            href="services"
          >
            <BsGear />
            <span className="ml-4 block ">Services</span>
          </a>
        </li>

        <DropList
          icon={<MdUpdate />}
          items={updateDropListItems}
          mainText="Update"
        />

        <li className={"navItems "}>
          <a
            className="cursor-pointer text-xl items-center active:bg-opacity-50 active:bg-slate-200 p-3 text-white-400 flex w-full h-full hover:bg-slate-700"
            href="contact-us"
          >
            <TiContacts />
            <span className="ml-4 block ">Contact Us</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
