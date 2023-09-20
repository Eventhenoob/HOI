import { Link } from "react-router-dom";
import DropItem, { internalItemProps } from "./DropItem";

import style from "./NavigationDropList.module.css";

const NavigationDropList = ({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) => {
  const internalItemsUpdate: internalItemProps[] = [
    { item: "Blogs", link: "/blogs" },
    { item: "News", link: "/news" },
  ];

  const styleClassed =
    "text-slate-300 text-md hover:text-slate-100  cursor-pointer ";
  return (
    <ul className="flex justify-between xl:w-2/5 md:w-2/3 ">
      <li className={"navItems "}>
        <Link className={styleClassed + style["styledItems"]} to="/aboutUs">
          About Us
        </Link>
      </li>
      <li className={"navItems "}>
        <Link className={styleClassed + style["styledItems"]} to="/services">
          Services
        </Link>
      </li>

      <DropItem
        setSelectedIndex={setSelectedIndex}
        index={1}
        selectedIndex={selectedIndex}
        internalItems={internalItemsUpdate}
        itemStyles={styleClassed}
        mainItem="Treanding"
      />

      <li className={"navItems "}>
        <Link className={styleClassed + style["styledItems"]} to="/contactUs">
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavigationDropList;
