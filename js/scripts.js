function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById("darkModeToggle");

  body.classList.toggle("dark");
  darkModeToggle.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
}

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);