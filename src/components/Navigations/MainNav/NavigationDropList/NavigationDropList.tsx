import { Link } from "react-router-dom";
import DropItem, { internalItemProps } from "./DropItem";

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
    "text-lightPrimary-200 hover:text-lightSecondry-400 font-semibold cursor-pointer ";
  return (
    <ul className="flex justify-between xl:w-2/5 md:w-2/3 ">
      <li className="navItems ">
        <a className={styleClassed} href="contact-us">
          Contact Us
        </a>
      </li>
      <li className="navItems ">
        <a className={styleClassed} href="services">
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

      <li className="navItems ">
        <Link className={styleClassed} to="things-happening">
          Things Happening
        </Link>
      </li>
    </ul>
  );
};

export default NavigationDropList;
