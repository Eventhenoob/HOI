import { useEffect, useState } from "react";
import style from "./ChangableHeading.module.css";

export type headingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {headings.map((heading, index) => (
        <div
          className={
            style["headingContainer"] +
            " absolute -top-8 left-0 flex items-center w-full  justify-center " +
            (selectedItem === index ? style["active"] : " ")
          }
          key={index}
        >
          {generateHeadingsBasedOnType({
            type,
            text: heading,
            classes:
              "lg:text-5xl md:text-4xl text-4xl  text-center font-heading text-white-400 w-3/4  !leading-snug ",
          })}
        </div>
      ))}
    </>
  );
};

export default ChangableHeadings;
