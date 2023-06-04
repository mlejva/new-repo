function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function toggleLightMode() {
  document.body.classList.toggle("light");
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("dark-mode-button");
  const lightModeButton = document.getElementById("light-mode-button");

  darkModeButton.addEventListener("click", toggleDarkMode);
  lightModeButton.addEventListener("click", toggleLightMode);
});