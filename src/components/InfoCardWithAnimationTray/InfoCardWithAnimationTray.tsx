import InfoCardWithAnimation from "./InfoCardWithAnimation";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import teamAnimation from "../../assets/team-animation.json";
import qaAnimation from "../../assets/qa-and-testing-animation.json";
import saasAnimation from "../../assets/saas.json";
import iotAnimation from "../../assets/iot-animation.json";
import aiAnimation from "../../assets/ai-animation.json";
import mobileAppAnimation from "../../assets/mobile-app-animation.json";
import dataAnalyticsAnimation from "../../assets/data-analytics-and-insights-animation.json";
import techConsultanceAnimation from "../../assets/tech-consultation-animation.json";

import ArrowFloatingButton from "../ArrowFloatingButton/ArrowFloatingButton";
import { useRef, useState } from "react";
import { useMobile } from "../../contexts/MobileContext";

const InfoCardWithAnimationTray = () => {
  const isMobile = useMobile();
  const trayRef = useRef<HTMLDivElement>(null);
  const [disabled, setDisabled] = useState<"" | "left" | "right" | "both">(
    "left"
  );

  function getTranslateX(element: HTMLDivElement) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  const moveTray = (direction: "left" | "right") => {
    setDisabled("both");
    setTimeout(() => {
      if (isMobile) {
        if (trayRef.current != null) {
          if (Math.ceil(getTranslateX(trayRef.current)) >= 0) {
            console.log("Disabled the left");
            setDisabled("left");
          } else if (
            getTranslateX(trayRef.current) <=
            -trayRef.current.clientWidth +
              // + window.innerWidth
              (288 + 64) * 2
          ) {
            setDisabled("right");
          } else setDisabled("");
        }
      } else {
        if (trayRef.current != null) {
          if (Math.ceil(getTranslateX(trayRef.current)) >= 0) {
            console.log("Translate X: " + getTranslateX(trayRef.current));
            setDisabled("left");
          } else if (
            getTranslateX(trayRef.current) <=
            -trayRef.current.clientWidth + window.innerWidth
          )
            setDisabled("right");
          else {
            console.log("Translate X: " + getTranslateX(trayRef.current));
            setDisabled("");
          }
        }
      }
    }, 400);

    if (direction === "right" && trayRef.current) {
      trayRef.current.style.transform = `translateX(${
        getTranslateX(trayRef.current) - 288 - 64
      }px)`;
    } else if (direction === "left" && trayRef.current) {
      trayRef.current.style.transform = `translateX(${
        getTranslateX(trayRef.current) + 288 + 64
      }px)`;
    }
  };
  const qaLottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="trayContainer w-full relative overflow-hidden">
      <ArrowFloatingButton
        isDisabled={disabled == "right" || disabled == "both"}
        direction="right"
        onClick={() => {
          if (disabled != "right") moveTray("right");
        }}
      />
      <ArrowFloatingButton
        isDisabled={disabled == "left" || disabled == "both"}
        onClick={() => {
          if (disabled != "left") moveTray("left");
        }}
        direction="left"
      />
      <div
        ref={trayRef}
        className="tray p-8 pl-14 pr-16 flex transition-transform duration-300 items-center min-w-max"
      >
        <InfoCardWithAnimation
          gradientColor="blue"
          heading="Dedicated Team"
          paragraph="Our team of tech experts is ready to turn your ideas into reality, whether you need a single developer or a full-fledged squad."
          lottieElement={<Lottie animationData={teamAnimation} />}
        />
        <InfoCardWithAnimation
          gradientColor="red"
          heading="QA and Testing"
          paragraph="We meticulously ensure your solutions are reliable and secure through rigorous quality assurance and testing."
          lottieElement={
            <Lottie
              onComplete={() => {
                qaLottieRef.current?.goToAndPlay(14, true);
                //   qaLottieRef.current?.setDirection(-1);
                //   qaLottieRef.current?.play();
              }}
              loop={false}
              lottieRef={qaLottieRef}
              animationData={qaAnimation}
            />
          }
        />
        <InfoCardWithAnimation
          gradientColor="green"
          heading="SaaS (Software as a Service)"
          paragraph="Experience the power of cloud-based solutions that enhance productivity and efficiency."
          lottieElement={<Lottie animationData={saasAnimation} />}
        />
        <InfoCardWithAnimation
          gradientColor="purple"
          heading="IoT (Internet of Things)"
          paragraph="Join the IoT revolution with our smart solutions that transform everyday objects into intelligent assets."
          lottieElement={<Lottie width={10} animationData={iotAnimation} />}
        />

        <InfoCardWithAnimation
          gradientColor="red"
          heading="AI (Artificial Intelligence)"
          paragraph="Harness the potential of AI for decision-making, process automation, and improved user experiences."
          lottieElement={<Lottie width={10} animationData={aiAnimation} />}
        />

        <InfoCardWithAnimation
          gradientColor="blue"
          heading="Mobile App Development"
          paragraph="From concept to launch, we bring your app ideas to life on iOS, Android, or cross-platform."
          lottieElement={
            <Lottie width={10} animationData={mobileAppAnimation} />
          }
        />

        <InfoCardWithAnimation
          gradientColor="darkBlue"
          heading="Data Analytics and Insights"
          paragraph="Turn raw data into actionable knowledge to make informed decisions and gain a competitive edge."
          lottieElement={
            <Lottie width={10} animationData={dataAnalyticsAnimation} />
          }
        />

        <InfoCardWithAnimation
          gradientColor="green"
          heading="Tech Consultation"
          paragraph="Get expert guidance on your tech projects to ensure you're on the right track to success."
          lottieElement={
            <Lottie width={10} animationData={techConsultanceAnimation} />
          }
        />
      </div>
    </div>
  );
};

export default InfoCardWithAnimationTray;
