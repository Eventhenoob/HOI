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
    { item: "Treanding", link: "#" },
    { item: "Blogs", link: "#" },
  ];

  const styleClassed =
    "text-slate-300 text-md hover:text-slate-100  cursor-pointer ";
  return (
    <ul className="flex justify-between xl:w-2/5 md:w-2/3 ">
      <li className={"navItems "}>
        <a className={styleClassed + style["styledItems"]} href="contact-us">
          About Us
        </a>
      </li>
      <li className={"navItems "}>
        <a className={styleClassed + style["styledItems"]} href="services">
          Services
        </a>
      </li>

      <DropItem
        setSelectedIndex={setSelectedIndex}
        index={1}
        selectedIndex={selectedIndex}
        internalItems={internalItemsUpdate}
        itemStyles={styleClassed}
        mainItem="Updates"
      />

      <li className={"navItems "}>
        <a className={styleClassed + style["styledItems"]} href="services">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default NavigationDropList;
