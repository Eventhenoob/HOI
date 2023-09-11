export default (element: HTMLElement | null) => {
  const height = window.innerHeight;
  if (element != null) element.style.height = height + "px";
};
