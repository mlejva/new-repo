const toggleTheme = () => {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
};

const initializeTheme = () => {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", storedTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();

  const themeToggle = document.getElementById("toggle-theme");
  themeToggle.addEventListener("click", toggleTheme);
});