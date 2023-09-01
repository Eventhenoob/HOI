import { useEffect, useState } from "react";
import style from "./ChangableHeading.module.css";

type headingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  type: headingType;
  headings: string[];
}

interface generateHeadingsProps {
  type: headingType;
  text: string;
  classes: string;
}

const generateHeadingsBasedOnType = ({
  type,
  text,
  classes,
}: generateHeadingsProps): JSX.Element => {
  if (type === "h1") return <h1 className={classes}>{text}</h1>;
  if (type === "h2") return <h2 className={classes}>{text}</h2>;
  if (type === "h3") return <h3 className={classes}>{text}</h3>;
  if (type === "h4") return <h4 className={classes}>{text}</h4>;
  if (type === "h5") return <h5 className={classes}>{text}</h5>;
  return <h6 className={classes}>{text}</h6>;
};

const ChangableHeadings = ({ type, headings }: Props) => {
  // const [selectedItem, setSelectedItem] = useState(0);

  // const toggleSelectedItem = () => {
  //   setSelectedItem((previousItem) => {
  //     console.log("Timer Called");
  //     return previousItem === headings.length - 1 ? 0 : ++previousItem;
  //   });
  // };

  // useEffect(() => {
  //   const interval = setInterval(toggleSelectedItem, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((previousItem) => {
        return previousItem === headings.length - 1 ? 0 : previousItem + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [headings.length]);

  let count = 0;
  return (
    <>
      {headings.map((heading, index) => (
        <div
          className={
            style["headingContainer"] +
            " absolute -top-8 left-0 flex items-center  justify-center w-full " +
            (selectedItem === index ? style["active"] : " ")
          }
          key={count++}
        >
          {generateHeadingsBasedOnType({
            type,
            text: heading,
            classes:
              "lg:text-5xl md:text-4xl text-3xl font-semibold text-center font-headings text-darkPrimaryText-400  !leading-snug ",
          })}
        </div>
      ))}
    </>
  );
};

export default ChangableHeadings;