import { ReactNode, useEffect } from "react";
import style from "./InfoCardWithAnimation.module.css";
// import { LottieRef } from "lottie-react";

interface Props {
  heading: string;
  paragraph: string;
  lottieElement: ReactNode;
  gradientColor: "pink" | "blue" | "red" | "darkBlue" | "purple" | "green";
}

const InfoCardWithAnimation = ({
  heading,
  paragraph,
  lottieElement,
  gradientColor,
}: Props) => {
  useEffect(() => {}, []);
  return (
    <div
      className={
        " relative  w-72 shrink-0 overflow-hidden z-10 shadow-md cursor-pointer  rounded-tl-3xl rounded-br-3xl bg-slate-800 " +
        style["container"] +
        " " +
        style[gradientColor]
      }
    >
      <div
        className={
          " w-full h-96 p-5 z-30 bg-transparent relative  flex flex-col overflow-hidden  rounded-tl-3xl rounded-br-3xl "
        }
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        <h3 className=" text-xl self-start mb-1 text-stone-100 ">{heading}</h3>
        <p className="text-sm leading-6 text-slate-300">{paragraph}</p>
        <div
          className={
            "flex justify-center w-full relative z-40 mt-auto " +
            style["scaleLogo"]
          }
        >
          <div className="w-3/4 ">{lottieElement}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardWithAnimation;
