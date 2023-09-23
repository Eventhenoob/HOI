interface Props {
  onLoadedData: () => void;
  isDarkBg: boolean;
}

const VideoBG = ({ onLoadedData, isDarkBg }: Props) => {
  return (
    <div
      className={
        "absolute -z-50 top-0 left-0 overflow-hidden w-full h-full " +
        (isDarkBg ? "bg-black" : "")
      }
    >
      <video
        onPlay={() => {
          onLoadedData();
        }}
        autoPlay
        preload="auto"
        muted={true}
        loop={true}
        className={
          "object-cover w-full h-full " + (isDarkBg ? " opacity-50" : "")
        }
      >
        <source src="./backgound-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBG;
