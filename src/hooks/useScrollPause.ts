let isScrollEnable = true;

function useScrollPause() {
  const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    isScrollEnable = false;
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const enableScroll = () => {
    isScrollEnable = true;
    window.onscroll = function () {};
  };

  return { disableScroll, enableScroll, isScrollEnable };
}

export default useScrollPause;
