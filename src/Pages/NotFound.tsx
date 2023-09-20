import Lottie from "lottie-react";

import NotFoundAnimation from "../assets/404Animation.json";

const NotFound = () => {
  return (
    <div className="w-screen flex justify-center pt-2">
      <div className="h-2/4 mb-10 w-auto lg:mb-52 lg:w-1/4">
        <Lottie animationData={NotFoundAnimation} />
        <h2 className="text-center text-xl font-serif font-extrabold">
          Page Not Found!
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
