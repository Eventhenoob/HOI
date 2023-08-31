import { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";

export interface subComponentTemplate {
  text: string;
  link: string;
}

interface Prop {
  mainTitle: string;
  subItems: subComponentTemplate[];
  styles: string;
}

const SubDrop = ({ mainTitle, subItems, styles }: Prop) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="transition-all duration-200">
      <button
        onClick={() => setActive((prev) => !prev)}
        className={
          "mainTitle flex items-center justify-center transition-colors duration-500 " +
          styles +
          (isActive ? " text-lightSecondry-400 " : "")
        }
      >
        <span className="inline-block pr-1">{mainTitle}</span>
        {isActive ? (
          <BsArrowUpShort size={"20px"} />
        ) : (
          <BsArrowDownShort size={"20px"} />
        )}{" "}
      </button>

      <ul
        className={
          " pl-5 overflow-hidden subItems transition-all  flex flex-col items-start justify-start text-lightPrimaryText-400 dark:text-darkPrimaryText-400 duration-1000 " +
          (!isActive ? "h-0" : "h-auto")
        }
      >
        {subItems.map((item) => (
          <li key={item.text} className="p-1 hover:text-lightSecondry-400 ">
            <a href={item.link}>{"-" + item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubDrop;
