import { useState } from "react";

interface Props {
  itemNumber: number;
  heading: string;
  text: string;
}

const ProgressItem = ({ itemNumber, heading, text }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className={
          "numberBox rounded-full duration-500 transition-all cursor-pointer text-black text-xl  flex justify-center items-center w-14 h-14 font-extrabold " +
          (isActive ? "bg-main-400 " : "bg-white-400")
        }
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        0{itemNumber}
      </div>
      <div
        className={
          "contentBox mt-14 transition-all w-56 rounded-lg cursor-pointer p-4 duration-500 flex flex-col " +
          (isActive
            ? " bg-main-400 text-black"
            : " bg-slate-700 text-white-400")
        }
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <h3 className="text-2xl mb-4 font-bold">{heading}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </>
  );
};

export default ProgressItem;
