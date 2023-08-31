interface Props {
  link: string;
  setIsLoadingToFalse: () => void;
}

const BgVideo = ({ link, setIsLoadingToFalse }: Props) => {
  return (
    <div className="videoContainer absolute top-0 left-0 w-full h-full bg-opacity-0 -z-10">
      <video
        onLoadedData={(event) => {
          if (event.currentTarget.readyState >= 3) {
            setIsLoadingToFalse();
          }
        }}
        className="object-cover absolute top-0 left-0 w-full h-full"
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BgVideo;
