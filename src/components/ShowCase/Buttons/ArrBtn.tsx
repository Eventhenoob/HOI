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
      className="w-10 h-10 inline-flex justify-center rounded-full items-center bg-gray-800"
    >
      {direction.toLowerCase() === "right" && (
        <BsArrowRightShort color={"#fff"} size={"25px"}></BsArrowRightShort>
      )}

      {direction.toLowerCase() === "left" && (
        <BsArrowLeftShort color={"#fff"} size={"25px"}></BsArrowLeftShort>
      )}
    </button>
  );
};

export default ArrBtn;
