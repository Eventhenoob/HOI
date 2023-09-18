import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

import style from "./PhotoOnHover.module.css";

interface Props {
  text: string;
  img: string;
  className: string;
}

const PhotoOnHoverText = ({ text, img, className }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <span
      className={
        (isHovering
          ? " overflow-visible "
          : " overflow-hidden " + style["blinkText"]) +
        " relative  translate-y-0 " +
        className
      }
    >
      <span
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {text}
      </span>

      <div
        className={
          " rounded-md absolute z-50 w-32 h-44 inline-flex items-center transition-opacity duration-300 justify-center bg-white-400 text-2xl text-white-400 -translate-y-full -top-2 left-0 opacity-0  " +
          (isHovering ? " opacity-100 visible " : " invisible ")
        }
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={img} className="h-40 rounded-md" alt="Img on hover" />
        <span className="block absolute bottom-0 translate-y-3">
          <BiSolidDownArrow />
        </span>
      </div>
    </span>
  );
};

export default PhotoOnHoverText;
