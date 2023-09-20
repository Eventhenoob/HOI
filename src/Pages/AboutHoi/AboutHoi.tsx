import Lottie from "lottie-react";

import { useRef, useEffect } from "react";
import useDisplayRes from "../../hooks/useElementToDisplayHeight";
import { useMobile } from "../../contexts/MobileContext";

// Animtaion Jsons
import menWithTech from "../../assets/manWithTech.json";
import visionAnimation from "../../assets/vision-animation.json";
import liveAnimation from "../../assets/future-animation.json";
import JoinAnimation from "../../assets/join-animation.json";

/***********  Json for Text  ********** */
import rocket from "../../assets/rocket.json";
import AnimationOnHoverText from "../../components/AnimationOnHoverText";
import PhotoOnHoverText from "../../components/PhotoOnHoverHeading";

// Style
import style from "./AboutHoi.module.css";

const AboutHoi = () => {
  const isMobile = useMobile();

  const AboutHoiRef = useRef<HTMLElement>(null);
  const VisionRef = useRef<HTMLElement>(null);
  const ApartRef = useRef<HTMLElement>(null);
  const JoinRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!isMobile) {
      useDisplayRes(AboutHoiRef.current);
      useDisplayRes(VisionRef.current);
      useDisplayRes(ApartRef.current);
      useDisplayRes(JoinRef.current);
    }
  }, [isMobile]);

  return (
    <>
      <header className="h-screen w-screen bg-bg-400">
        <h1>HOI</h1>
      </header>
      <main className={" " + style["container"]}>
        <section
          ref={AboutHoiRef}
          className={
            "AboutUs flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row justify-center items-center text-center bg-bg-400  " +
            style["sectionTOScrollSnap"]
          }
        >
          <div className="animation-with-text flex flex-col mb-20 lg:mb-0 lg:w-3/5 justify-center w-full  lg:justify-evenly items-center">
            <h2 className=" uppercase font-serif text-center w-full   mb-12 text-white-400 text-4xl">
              About House of{" "}
              <AnimationOnHoverText
                className="text-yellow-400"
                text="Innovation"
                lottieElement={<Lottie animationData={rocket} />}
              />
            </h2>
            <div className="p-4 font-sans font-white leading-9 text-white-400  text-2xl">
              <p className="inline">
                Welcome to House of Innovation, where creativity and technology
                unite to redefine the future! Founded by
              </p>{" "}
              {/* <strong>
                <em className="text-main-400">AK Singh</em>
              </strong> */}
              <PhotoOnHoverText
                className="text-main-400 font-bold italic"
                text="AK Singh"
                img="\FoundersPhoto.jpeg"
              />
              <p className="inline">
                , a passionate Developer and Researcher, HoI is a hub of
                innovation at the intersection of AI and Internet of Things.
              </p>
            </div>
          </div>
          <div className="w-full relative z-40 lg:w-2/5">
            <Lottie animationData={menWithTech} />
          </div>
        </section>

        <section
          ref={VisionRef}
          className={
            "flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row-reverse justify-center items-center text-center bg-main-400 " +
            style["sectionTOScrollSnap"]
          }
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
          className={
            "apart flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row justify-center items-center text-center bg-bg-400  " +
            style["sectionTOScrollSnap"]
          }
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
          className={
            "flex-col-reverse h-auto pt-20 lg:pt-5 lg:pl-16 lg:pr-16 overflow-hidden  flex lg:flex-row-reverse justify-center items-center text-center bg-main-400 " +
            style["sectionTOScrollSnap"]
          }
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
    </>
  );
};

export default AboutHoi;
