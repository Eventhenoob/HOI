import { RefObject, useEffect, useState } from "react";
import ShowCaseQuote, { contentStructure } from "./ShowCaseQuote";

import style from "./showCase.module.css";

export interface showCaseTemplate {
  id: number;
  img: string;
  title: string;
  link: string;
  content: contentStructure[];
}

interface Props {
  id: number;
  img: string;
  title: string;
  link: string;
  content: contentStructure[];
  selectedID: number;
  toRef: RefObject<HTMLDivElement>;
}

const ShowCase = ({
  toRef,
  id,
  img,
  title,
  link,
  content,
  selectedID,
}: Props) => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (id === selectedID) setTimeout(() => setShowContent(true), 2000);
    else setShowContent(false);
  }, [selectedID]);

  return (
    <div
      ref={id === selectedID ? toRef : null}
      className={
        style["showCase-" + id] +
        " z-0 w-full h-full flex absolute p-6 flex-col-reverse items-start justify-start transition-all duration-1000 ease-in " +
        " showCase-" +
        id +
        " " +
        (id === selectedID ? "blur-none" : "blur-md opacity-100")
      }
    >
      <img
        className="object-cover  w-full h-full absolute top-0 left-0 z-0"
        src={img}
      />
      {showContent ? (
        <ShowCaseQuote content={content} link={link} title={title} />
      ) : null}
    </div>
  );
};

export default ShowCase;
