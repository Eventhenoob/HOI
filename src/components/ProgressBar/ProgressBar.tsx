import ProgressItem from "./ProgressItem";
import style from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className="relative ProgressBarContainer w-screen mt-28 lg:mb-20  h-min pb-40">
      <div className="visible md:invisible text-center translate-x-2/4 -mt-4 absolute top-0 w-auto h-full lineContainer ">
        <img
          src="./work-process-line-ver.png"
          className="h-full"
          alt="Img Not Found"
        />
      </div>
      <div className="invisible md:visible  absolute top-0 w-full lineContainer mt-10">
        <img
          src="./work-process-line-hor.png"
          className="w-full"
          alt="Img Not Found"
        />
      </div>

      <div className="invisible md:visible absolute top-0 mt-80 lg:hidden w-full lineContainer ">
        <img
          src="./work-process-line-hor.png"
          className="w-full"
          alt="Img Not Found"
        />
      </div>

      <div className="w-full flex relative z-10 flex-wrap gap-8 justify-center items-center md:justify-evenly  flex-col md:flex-row -mt-6 md:mt-40 lg:mt-9 2xl:-mt-0 lg:absolute lg:top-0 ">
        <div
          className={
            "flex justify-center items-center flex-col lg:block w-48 lg:-mt-3 2xl:mt-6 " +
            style["ProgressItem"]
          }
        >
          <ProgressItem
            heading="Discover"
            itemNumber={1}
            text="We emphasize planning get everythin documente nothing assumption"
          />
        </div>
        <div className="w-48 flex justify-center items-center flex-col lg:block lg:-mt-7 ml-14 mt-10 md:ml-0 2xl:-mt-4 ">
          <ProgressItem
            heading="Planning"
            itemNumber={2}
            text="Our design approach is to simplify. We embrace creating something."
          />
        </div>
        <div
          className="flex justify-center items-center flex-col lg:block w-48 lg:mt-3
         mt-10 -ml-2 md:ml-0 2xl:mt-12"
        >
          <ProgressItem
            heading="Design & Dev"
            itemNumber={3}
            text="At this step, we cater to requirement backed web services developmenc"
          />
        </div>
        <div className="flex justify-center items-center flex-col lg:block w-52 lg:-mt-20 md:-mt-12 mt-10 ml-12 md:ml-0 2xl:-mt-12">
          <ProgressItem
            heading="Testing"
            itemNumber={4}
            text="On the other denounce with righteou indignation dislike beguile demore"
          />
        </div>
        <div className="flex justify-center items-center flex-col lg:block w-48 lg:mt-10 mt-7 md:-mt-2 ml-12 md:ml-0 2xl:mt-20">
          <ProgressItem
            heading="Project Deliver"
            itemNumber={5}
            text="We denounce righteous indignation and dislike men who beguiled"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
