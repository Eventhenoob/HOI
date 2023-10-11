import { useEffect, useRef, useState } from "react";

import HologramBg from "../../components/HologramBg/HologramBg";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import VideoBG from "../../components/VideoBG";
import ChangableHeadings from "../../components/ChangableHeadings";
import { headingType } from "../../components/ChangableHeadings/ChangableHeadings";

import MoveToElementButton from "../../components/MoveToElementButton/MoveToElementButton";
import useDisplayRes from "../../hooks/useElementToDisplayHeight";

// Styles
import style from "./HomePage.module.css";
import { useMobile } from "../../contexts/MobileContext";
import InfoCardWithAnimationTray from "../../components/InfoCardWithAnimationTray";
import ProgressBar from "../../components/ProgressBar";

////////////////////////

const ChangableHeadingsData: {
  headingType: headingType;
  headings: string[];
} = {
  headingType: "h1",
  headings: [
    "HOI: Where Code Wizards and Hardware Geeks Unite (No Spellbooks Required)!",
    "Turning 'Bits' into 'Fits of Excitement' - That's How We Roll at HOI",
    "From 'What If' to 'What Wow' - HOI, Your Go-To Hardware and Code Gurus!",
    "At HOI, We Code Like Shakespeare Wrote Sonnets - Beautifully and with Style!",
    "Unleash Your Inner Geek and 'Board' the Innovation Train with Us!",
    "HOI: Where Hardware Gets a Dose of 'Code-caine' to Perform Miracles!",
  ],
};

const HomePage = () => {
  const isMobile = useMobile();

  const [isVideoLoading, setVideoLoading] = useState(true);
  // const [isNavigationActive, setNavigationActive] = useState(false);
  const [isMovedFromHeader, setMovedFromHeader] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (screen.width < 900) {
      setVideoLoading(false);
    }
  }, []);

  useDisplayRes(headerRef.current);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setMovedFromHeader(true);
            } else {
              setMovedFromHeader(false);
            }
          });
        },
        {
          rootMargin: "-50px",
        }
      );
      observer.observe(header);
    }
  }, []);

  return (
    <>
      <LoadingScreen showLoadingScreen={isVideoLoading} />

      <MoveToElementButton
        isInView={!isMovedFromHeader}
        element={headerRef.current}
      />
      <header
        ref={headerRef}
        className={
          "relative overflow-hidden flex justify-center items-center header flex-col w-full " +
          style["container"]
        }
      >
        <div
          className={
            " flex justify-center w-full" +
            (isMobile ? " -translate-y-16 " : "")
          }
        >
          <div className="relative flex justify-center items-center w-full">
            <ChangableHeadings
              headings={ChangableHeadingsData.headings}
              type={ChangableHeadingsData.headingType}
            />
          </div>
        </div>

        {isMobile ? (
          <HologramBg />
        ) : (
          <VideoBG
            isDarkBg={true}
            onLoadedData={() => setVideoLoading(false)}
          />
        )}
      </header>

      <main className="bg-bg-400">
        <section className="services pt-40 pb-20 flex flex-col items-center justify-center ">
          <h2 className="ml-8 mb-10 text-white-400 font-heading  text-5xl">
            How We Can <span className="text-main-400">Help</span> You?
          </h2>
          <InfoCardWithAnimationTray />
        </section>

        <section className="best-practices bg-bg-400 p-3 pt-40 pb-40">
          <h2 className="ml-16 mr-16 text-white-400 text-center font-heading  text-5xl">
            <span className="text-yellow-300 ">Unconventional Excellence</span>:
            Industry Best Practices Turned Upside Down and Inside Out!
          </h2>

          <ProgressBar />
        </section>
      </main>
    </>
  );
};

export default HomePage;
