import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import VideoBG from "../components/VideoBG";
import ChangableHeadings from "../components/ChangableHeadings";
import { headingType } from "../components/ChangableHeadings/ChangableHeadings";
import FullNav from "../components/Navigation/FullNav";
import MobileNav from "../components/Navigation/MobileNav/MobileNav";

const ChangableHeadingsData: {
  headingType: headingType;
  headings: string[];
} = {
  headingType: "h1",
  headings: [
    "Hoi is building the future",
    "Hoi is building the future",
    "Hoi is building the future",
  ],
};

const HomePage = () => {
  const [isVideoLoading, setVideoLoading] = useState(true);
  const [isNavigationActive, setNavigationActive] = useState(false);
  const [isMobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    screen.width < 900 && setMobileNav(true);
  }, []);

  return (
    <>
      <LoadingScreen showLoadingScreen={isVideoLoading} />
      {isMobileNav ? (
        <MobileNav />
      ) : (
        <FullNav isNavigationActive={isNavigationActive} />
      )}

      <header className="relative flex justify-center items-center header flex-col w-full h-screen">
        <div className="relative w-full">
          <ChangableHeadings
            headings={ChangableHeadingsData.headings}
            type={ChangableHeadingsData.headingType}
          />
        </div>
        <VideoBG isDarkBg={true} onLoadedData={() => setVideoLoading(false)} />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
};

export default HomePage;
