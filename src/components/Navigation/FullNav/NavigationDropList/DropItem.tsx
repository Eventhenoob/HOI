import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

export interface internalItemProps {
  item: string;
  link: string;
}

interface Props {
  mainItem: string;
  internalItems: internalItemProps[];
  itemStyles: string;
  index: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

const DropItem = ({
  index,
  mainItem,
  selectedIndex,
  internalItems,
  itemStyles,
  setSelectedIndex,
}: Props) => {
  const isActive = index === selectedIndex;
  const toggleHovering = () => {
    selectedIndex !== index ? setSelectedIndex(index) : setSelectedIndex(-1);
  };
  return (
    <li
      className="inline-block relative"
      onClick={(event) => {
        event.stopPropagation();
        toggleHovering();
      }}
    >
      <span
        className={itemStyles + " flex justify-center items-center text-center"}
      >
        {mainItem}
        {isActive ? (
          <AiOutlineUp className="h-3 inline-block ml-1" />
        ) : (
          <AiOutlineDown className="h-3 inline-block ml-1" />
        )}
      </span>
      {isActive && (
        <ul
          className={
            "absolute bg-lightPrimary-400 dark:bg-darkPrimary-400  overflow-hidden rounded-xl top-8 -left-3"
          }
        >
          {internalItems.map((internalItem) => (
            <li
              key={internalItem.item}
              className="  text-main-400 hover:text-white-400 hover:!bg-main-400 text-center bg-bg-400  p-5 pt-2 pb-2"
            >
              <a href={internalItem.link} className=" block text-base ">
                {internalItem.item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropItem;
