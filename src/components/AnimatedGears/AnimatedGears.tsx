import style from "./AnimatedGears.module.css";

import { BsGearWideConnected } from "react-icons/bs";
import { PiGearFineDuotone } from "react-icons/pi";
import { PiGearFineFill } from "react-icons/pi";

const AnimatedGears = () => {
  return (
    <div className="absolute overflow-hidden h-full w-full top-0 left-0 animatedGearSetContainer">
      <div className="absolute opacity-70 bottom-96 md:top-0 md:left-0 animatedGearSet -z-40">
        <div
          className={
            " absolute -left-9 md:top-80 md:-left-48 text-lightPrimary-400  " +
            style["gear1"]
          }
        >
          <BsGearWideConnected size={"500px"} />
        </div>
      </div>
      <div className="absolute hidden md:block top-0 left-0 ">
        <div className="absolute top-72 left-280 opacity-70 animatedGearSet -z-40">
          <div
            className={
              " absolute -top-1 text-lightPrimary-400 -left-3 " + style["gear1"]
            }
          >
            <BsGearWideConnected size={"100px"} />
          </div>

          <div
            className={
              "absolute block text-lightPrimary-400 top-12 left-14 " +
              style["gear2"]
            }
          >
            <PiGearFineDuotone size={"100px"} />
          </div>

          <div
            className={
              "absolute block text-lightPrimary-400 top-16 -left-16 " +
              style["gear2"]
            }
          >
            <PiGearFineFill size={"100px"} />
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block top-44 left-4 ">
        <div className="absolute top-96 left-36 opacity-40 rotate-180 origin-center animatedGearSet -z-40">
          <div
            className={
              " absolute text-lightPrimary-400 top-2 -left-2 " + style["gear2"]
            }
          >
            <BsGearWideConnected size={"95px"} />
          </div>

          <div
            className={
              "absolute block text-lightPrimary-400 top-14 left-14 " +
              style["gear1"]
            }
          >
            <PiGearFineDuotone size={"100px"} />
          </div>

          <div
            className={
              "absolute block text-lightPrimary-400 top-20 -left-14 " +
              style["gear1"]
            }
          >
            <PiGearFineFill size={"90px"} />
          </div>
        </div>
        <div
          className={
            "absolute top-96 left-36 opacity-70 rotate-180 origin-center animatedGearSet -z-30 "
          }
        >
          <div
            className={
              " absolute text-lightPrimary-400 top-2 -left-2 " +
              style["gear2"] +
              " " +
              style["gearBoxSlow"]
            }
          >
            <BsGearWideConnected size={"95px"} />
          </div>

          <div
            className={
              "absolute block text-lightPrimary-400 top-14 left-14 " +
              style["gear1"] +
              " " +
              style["gearBoxSlow"]
            }
          >
            <PiGearFineDuotone size={"100px"} />
          </div>

          <div
            className={
              "absolute block  text-lightPrimary-400 top-20 -left-14 " +
              style["gear1"] +
              " " +
              style["gearBoxSlow"]
            }
          >
            <PiGearFineFill size={"90px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGears;
