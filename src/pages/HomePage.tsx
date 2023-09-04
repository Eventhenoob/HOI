import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import VideoBG from "../components/VideoBG";

const HomePage = () => {
  const [isVideoLoading, setVideoLoading] = useState(true);
  return (
    <>
      <LoadingScreen showLoadingScreen={isVideoLoading} />
      <header className="relative header w-full h-screen">
        <VideoBG onLoadedData={() => setVideoLoading(false)} />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
};

export default HomePage;
