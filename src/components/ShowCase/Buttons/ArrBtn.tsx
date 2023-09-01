import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  direction: string;
  onClick: () => void;
}

const ArrBtn = ({ direction, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 inline-flex justify-center rounded-full items-center bg-lightPrimary-400 "
    >
      {direction.toLowerCase() === "right" && (
        <BsArrowRightShort size={"25px"}></BsArrowRightShort>
      )}

      {direction.toLowerCase() === "left" && (
        <BsArrowLeftShort size={"25px"}></BsArrowLeftShort>
      )}
    </button>
  );
};

export default ArrBtn;
