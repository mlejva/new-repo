document.addEventListener("DOMContentLoaded", () => {
  const backgroundSvg = document.getElementById("background-svg");

  const updateSvgSize = () => {
    backgroundSvg.style.width = `${window.innerWidth}px`;
    backgroundSvg.style.height = `${window.innerHeight}px`;
  };

  updateSvgSize();
  window.addEventListener("resize", updateSvgSize);
});