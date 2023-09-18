import { useRef, useState, ReactNode } from "react";

import style from "./AnimationOnHover.module.css";

interface Props {
  text: string;
  className?: string;
  lottieElement: ReactNode;
}

const AnimationOnHoverText = ({ text, lottieElement, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);
  let prevX: null | number = null;

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(event) => {
        if (prevX === null) prevX = event.clientX;
        let currentX = event.clientX;

        let deltaX = currentX - prevX;

        if (svgRef.current)
          svgRef.current.style.transform = `translate(${deltaX}px, -120%)`;
      }}
      className={
        "inline-block relative translate-y-0 " +
        className +
        " " +
        (!isHovered ? style["blinkText"] : "")
      }
    >
      {text}
      {
        <div
          ref={svgRef}
          className={
            "absolute z-50 w-44 -translate-y-full left-0 " +
            (isHovered ? "visible " : "hidden")
          }
        >
          {lottieElement}
        </div>
      }
    </span>
  );
};

export default AnimationOnHoverText;
