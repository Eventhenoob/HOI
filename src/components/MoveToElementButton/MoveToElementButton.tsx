import { MdOutlineKeyboardArrowUp } from "react-icons/md";

interface Props {
  isInView: boolean;
  element: HTMLElement | null;
}

const MoveToElementButton = ({ isInView, element }: Props) => {
  return (
    <button
      onClick={() => {
        element?.scrollIntoView({ behavior: "smooth" });
      }}
      className={
        "fixed z-50 bottom-7 right-4 w-14 h-14 transition-all duration-500 rounded-full hover:text-lightSecondry-400 flex justify-center items-center bg-white-400 text-3xl " +
        (isInView ? " translate-x-0 " : " translate-x-32 ")
      }
    >
      <MdOutlineKeyboardArrowUp />
    </button>
  );
};

export default MoveToElementButton;
