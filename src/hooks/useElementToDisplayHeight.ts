export default (element: HTMLElement | null, offset = 0) => {
  const height = window.innerHeight;
  if (element != null) element.style.height = height - offset + "px";
};
