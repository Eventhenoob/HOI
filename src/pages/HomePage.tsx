import { useEffect, useRef, useState } from "react";
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
    "HOI: Where Code Wizards and Hardware Geeks Unite (No Spellbooks Required)!",
    "Turning 'Bits' into 'Fits of Excitement' - That's How We Roll at HOI",
    "From 'What If' to 'What Wow' – HOI, Your Go-To Hardware and Code Gurus!",
    "At HOI, We Code Like Shakespeare Wrote Sonnets – Beautifully and with Style!",
    "Unleash Your Inner Geek and 'Board' the Innovation Train with Us!",
    "HOI: Where Hardware Gets a Dose of 'Code-caine' to Perform Miracles!",
  ],
};

const HomePage = () => {
  const [isVideoLoading, setVideoLoading] = useState(true);
  const [isNavigationActive, setNavigationActive] = useState(false);
  const [isMobileNav, setMobileNav] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    screen.width < 900 && setMobileNav(true);
  }, []);

  useEffect(() => {
    if (headerRef.current && !isMobileNav) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          !entry.isIntersecting && setNavigationActive(true);
          entry.isIntersecting && setNavigationActive(false);
        });
      }, {});
      observer.observe(headerRef.current);
    }
  }, []);

  return (
    <>
      <LoadingScreen showLoadingScreen={isVideoLoading} />
      {isMobileNav ? (
        <MobileNav />
      ) : (
        <FullNav isNavigationActive={isNavigationActive} />
      )}

      <header
        ref={headerRef}
        className="relative flex justify-center items-center header flex-col w-full h-screen"
      >
        <div className="flex justify-center w-full">
          <div className="relative flex justify-center items-center w-full">
            <ChangableHeadings
              headings={ChangableHeadingsData.headings}
              type={ChangableHeadingsData.headingType}
            />
          </div>
        </div>
        <VideoBG isDarkBg={true} onLoadedData={() => setVideoLoading(false)} />
      </header>
      <main>
        <section className=""></section>
      </main>
      <footer></footer>
    </>
  );
};

export default HomePage;
