import { useEffect, useRef, useState } from "react";
import ShowCase, { showCaseTemplate } from "./ShowCase";
import style from "./showCase.module.css";
import moveContainerView from "./moveContainerView";
import _debounce from "lodash/debounce";
import ArrBtn from "./Buttons/ArrBtn";

interface Props {
  showCaseTemplateArr: showCaseTemplate[];
}

interface ShowCaseCoords {
  x: number;
  y: number;
}

const ShowCaseContainer = ({ showCaseTemplateArr }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const showCaseRef = useRef<HTMLDivElement>(null);
  const [selectedShowCase, setShowcase] = useState(0);
  const [isLoading, setLoading] = useState(false);

  function onShowCaseChange() {
    const coords: ShowCaseCoords = {
      x: 0,
      y: 0,
    };
    if (showCaseRef.current) {
      const target = showCaseRef.current;
      coords.x = parseFloat(getComputedStyle(target).left);
      coords.y = parseFloat(getComputedStyle(target).top);
    }

    if (containerRef.current)
      moveContainerView(containerRef.current, coords.x, coords.y);
  }

  function toggleIsLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2400);
  }

  // Change the current ShowCase to the adjecent ShowCase
  const handleScroll = _debounce(function (toPrevious: boolean = false) {
    if (!isLoading) {
      toggleIsLoading();
      if (!toPrevious)
        setShowcase((previousState) =>
          previousState < 6 ? previousState + 1 : 0
        );
      else
        setShowcase((previousState) =>
          previousState > 0 ? previousState - 1 : 6
        );
    }
  }, 200);

  // call the function to change to view to the adjecent ShowCase.
  useEffect(() => {
    onShowCaseChange();
  }, [selectedShowCase]);

  // change ELements on Scroll
  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      let toPrevious = event.deltaY < 0;

      handleScroll(toPrevious);
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <div
        ref={containerRef}
        className={
          style["showCaseContainer"] +
          " w-full h-full absolute top-0 left-0 transition-all duration-1000 ease-in "
        }
      >
        {showCaseTemplateArr.map((showCaseTemplate) => (
          <ShowCase
            toRef={showCaseRef}
            selectedID={selectedShowCase}
            key={showCaseTemplate.id}
            id={showCaseTemplate.id}
            content={showCaseTemplate.content}
            img={showCaseTemplate.img}
            link={showCaseTemplate.link}
            title={showCaseTemplate.title}
          />
        ))}
      </div>
      <div className="flex justify-between w-24 btn-container z-50 absolute bottom-5 right-5">
        <ArrBtn
          onClick={() => {
            handleScroll(true);
          }}
          direction="left"
        ></ArrBtn>
        <ArrBtn
          direction="right"
          onClick={() => {
            handleScroll();
          }}
        ></ArrBtn>
      </div>
    </div>
  );
};

export default ShowCaseContainer;
