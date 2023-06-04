document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('click', toggleDarkMode);

  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
});