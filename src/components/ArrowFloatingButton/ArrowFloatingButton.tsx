import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface Props {
  onClick: () => void;
  isDisabled?: boolean;
  direction: "left" | "right";
}

const ArrowFloatingButton = ({
  onClick,
  direction,
  isDisabled = false,
}: Props) => {
  return (
    <button
      disabled={isDisabled}
      className={
        "rounded-full flex justify-center items-center text-3xl absolute top-0 translate-y-48 z-40 text-black bg-white-400 h-12 w-12 hover:scale-110 transition-transform duration-200 active:scale-95 " +
        (direction === "left" ? "left-8" : "right-8") +
        " " +
        (isDisabled
          ? "!bg-slate-300 hover:scale-100 active:scale-100 cursor-not-allowed "
          : "")
      }
      onClick={onClick}
    >
      {direction === "left" ? <BsArrowLeftShort /> : <BsArrowRightShort />}
    </button>
  );
};

export default ArrowFloatingButton;
