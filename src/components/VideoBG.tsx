interface Props {
  onLoadedData: () => void;
}

const VideoBG = ({ onLoadedData }: Props) => {
  return (
    <div className="absolute -z-50 top-0 left-0 overflow-hidden w-full h-full">
      <video
        onPlay={() => {
          onLoadedData();
        }}
        autoPlay
        preload="auto"
        muted={true}
        loop={true}
        className="object-contain "
      >
        <source src="./backgound-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBG;
