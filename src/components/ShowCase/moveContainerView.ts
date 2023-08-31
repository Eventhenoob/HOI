function moveContainerView(
  container: HTMLDivElement,
  toMoveX: number,
  toMoveY: number
) {
  container.style.transitionTimingFunction = `ease`;
  container.style.transitionDuration = `.8s`;
  container.style.transform = `perspective(1200px) translate3D(${-toMoveX}px, ${-toMoveY}px, ${-3000}px)`;

  setTimeout(() => {
    container.style.transitionDuration = `.4s`;
    container.style.transitionTimingFunction = `ease-in`;
    container.style.transform = `perspective(1200px) translate3D(${-toMoveX}px, ${-toMoveY}px, ${-900}px)`;
  }, 900);
  setTimeout(() => {
    container.style.transitionTimingFunction = `ease-out`;
    container.style.transitionDuration = `.2s`;
    container.style.transform = `perspective(1200px) translate3D(${-toMoveX}px, ${-toMoveY}px, ${0}px)`;
  }, 1600);
}

export default moveContainerView;
