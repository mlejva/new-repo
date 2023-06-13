document.addEventListener("DOMContentLoaded", () => {
  const backgroundSvg = document.getElementById("background-svg");

  const updateSvgSize = () => {
    backgroundSvg.setAttribute("width", window.innerWidth);
    backgroundSvg.setAttribute("height", window.innerHeight);
  };

  updateSvgSize();
  window.addEventListener("resize", updateSvgSize);
});