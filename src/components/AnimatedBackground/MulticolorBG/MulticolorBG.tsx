import style from "./Multicolor.module.css";

const AnimatedBackground = () => {
  return (
    <div className={"absolute top-0 left-0 -z-50 " + style["animateBg"]}></div>
  );
};

export default AnimatedBackground;
