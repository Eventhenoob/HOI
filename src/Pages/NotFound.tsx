import Lottie from "lottie-react";

import NotFoundAnimation from "../assets/404Animation.json";

const NotFound = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-1/4">
        <Lottie animationData={NotFoundAnimation}></Lottie>
        <h2 className="text-center text-xl font-serif font-extrabold">
          Page Not Found!
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
