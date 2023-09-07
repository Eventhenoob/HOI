import { useState } from "react";

export interface ulItemsTemplate {
  text: string;
  link: string;
  icon: JSX.Element;
}

interface Props {
  icon: JSX.Element;
  mainText: string;
  items: ulItemsTemplate[];
}

const DropList = ({ icon, mainText, items }: Props) => {
  const [isActive, setActive] = useState(false);
  return (
    <li className="dropListItem">
      <button
        className="cursor-pointer items-center text-xl active:bg-opacity-50 active:bg-slate-200 p-3 text-white-400 flex w-full h-full hover:bg-slate-700"
        onClick={() => setActive((prev) => !prev)}
      >
        {icon}
        <span className="ml-4 block "> {mainText}</span>
      </button>

      <ul
        className={
          "overflow-hidden transition-all w-full flex flex-col justify-center items-center duration-500 bg-slate-300 " +
          (!isActive ? "h-0" : "h-20")
        }
      >
        {items.map((item) => (
          <li key={item.text} className=" w-full ">
            <a
              href={item.link}
              className="pl-6 w-full flex items-center text-xl hover:text-main-400 active:text-main-400 p-2 transition-all duration-300 active:bg-slate-800 hover:bg-slate-400"
            >
              {item.icon}
              <span className="ml-4 block ">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropList;
