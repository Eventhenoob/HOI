import { useEffect, useRef, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import VideoBG from "../../components/VideoBG";
import ChangableHeadings from "../../components/ChangableHeadings";
import { headingType } from "../../components/ChangableHeadings/ChangableHeadings";
import FullNav from "../../components/Navigation/FullNav";
import MobileNav from "../../components/Navigation/MobileNav/MobileNav";
import Lottie from "lottie-react";
import MoveToElementButton from "../../components/MoveToElementButton/MoveToElementButton";
import useDisplayRes from "../../hooks/useElementToDisplayHeight";

// Animtaion Jsons
import menWithTech from "../../assets/manWithTech.json";
import visionAnimation from "../../assets/vision-animation.json";
import liveAnimation from "../../assets/future-animation.json";
import JoinAnimation from "../../assets/join-animation.json";

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
  const [isVideoLoading, setVideoLoading] = useState(true);
  // const [isNavigationActive, setNavigationActive] = useState(false);
  const [isMovedFromHeader, setMovedFromHeader] = useState(false);
  const [isMobileNav, setMobileNav] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const AboutHoiRef = useRef<HTMLElement>(null);
  const VisionRef = useRef<HTMLElement>(null);
  const ApartRef = useRef<HTMLElement>(null);
  const JoinRef = useRef<HTMLElement>(null);

  useEffect(() => {
    screen.width < 900 && setMobileNav(true);
  }, []);

  useDisplayRes(headerRef.current);

  if (!isMobileNav) {
    useDisplayRes(AboutHoiRef.current);
    useDisplayRes(VisionRef.current);
    useDisplayRes(ApartRef.current);
    useDisplayRes(JoinRef.current);
  }

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("here");
              setMovedFromHeader(true);
            } else {
              console.log("here2");
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
      {isMobileNav ? <MobileNav /> : <FullNav />}
      <MoveToElementButton
        isInView={!isMovedFromHeader}
        element={headerRef.current}
      />
      <header
        ref={headerRef}
        className="relative overflow-hidden flex justify-center items-center header flex-col w-full "
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
      <main className="">
        <section
          ref={AboutHoiRef}
          className="AboutUs flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row justify-center items-center text-center bg-bg-400 "
        >
          <div className="animation-with-text flex flex-col mb-20 lg:mb-0 lg:w-3/5 justify-center w-full  lg:justify-evenly items-center">
            <h2 className=" uppercase font-serif text-center w-full   mb-12 text-white-400 text-4xl">
              About House of Innovation
            </h2>
            <p className="p-4 font-sans font-white leading-9 text-white-400  text-2xl">
              Welcome to House of Innovation, where creativity and technology
              unite to redefine the future! Founded by{" "}
              <strong>
                <em className="text-main-400">AK Singh</em>
              </strong>
              , a passionate Developer and Researcher, HoI is a hub of
              innovation at the intersection of AI and Internet of Things.
            </p>
          </div>
          <div className="w-full lg:w-2/5">
            <Lottie animationData={menWithTech} />
          </div>
        </section>

        <section
          ref={VisionRef}
          className="flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row-reverse justify-center items-center text-center bg-main-400"
        >
          <div className="animation-with-text flex flex-col mb-20 lg:mb-0 lg:w-3/5 justify-center w-full  lg:justify-evenly items-center">
            <h2 className=" uppercase font-serif text-center w-full  mb-8 mt-10 lg:mt-0 text-white-400 text-4xl">
              Our Vision
            </h2>
            <p className="p-4 font-sans font-white leading-9 text-white-400  text-2xl">
              At HoI, our vision is clear: We believe that the world can be a
              more exciting, efficient, and interconnected place through
              innovative hardware and cutting-edge software. Our mission is to
              make this vision a reality by exploring the endless possibilities
              of AI and IoT technologies.
            </p>
          </div>
          <div className="w-full lg:w-2/5">
            <Lottie animationData={visionAnimation} />
          </div>
        </section>

        <section
          ref={ApartRef}
          className="apart flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row justify-center items-center text-center bg-bg-400 "
        >
          <div className="animation-with-text flex flex-col mb-20 lg:mb-0 lg:w-3/5 justify-center w-full  lg:justify-evenly items-center">
            <h2 className=" uppercase font-serif text-center w-full   mb-12 text-white-400 text-4xl">
              What Sets Us Apart
            </h2>
            <p className="p-4 font-sans font-white leading-9 text-white-400  text-2xl">
              At HoI, we don't just talk about innovation; we live it. Our team
              of experts is always on the forefront of technology trends, eager
              to create hardware and software that not only works but also
              amazes. We're not just building the future; we're shaping it.
            </p>
          </div>
          <div className="w-full lg:w-2/5">
            <Lottie animationData={liveAnimation} />
          </div>
        </section>

        <section
          ref={JoinRef}
          className="flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row-reverse justify-center items-center text-center bg-main-400"
        >
          <div className="animation-with-text flex flex-col mb-20 lg:mb-0 lg:w-3/5 justify-center w-full  lg:justify-evenly items-center">
            <h2 className=" uppercase font-serif text-center w-full  mb-8 mt-10 lg:mt-0 text-white-400 text-4xl">
              Join Us on Our Journey
            </h2>
            <p className="p-4 font-sans font-white leading-9 text-white-400  text-2xl">
              Whether you're a tech enthusiast, a fellow innovator, or someone
              who simply enjoys the magic of AI and IoT, we invite you to join
              us on this exciting journey. Explore our range of Arduino boards,
              gadgets, and quirky creations. Dive into our articles and discover
              how we're bringing the future to life one line of code at a time.
            </p>
          </div>
          <div className="w-full lg:w-2/5">
            <Lottie animationData={JoinAnimation} />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default HomePage;
