import Lottie from "lottie-react";

import hologramAnimation from "../../assets/hologram.json";

const HologramBg = () => {
  return (
    <div className="absolute bg-bg-400 flex justify-center -z-50 top-0 left-0 overflow-hidden w-full h-full ">
      <Lottie className="absolute bottom-0" animationData={hologramAnimation} />
    </div>
  );
};

export default HologramBg;
