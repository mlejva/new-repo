document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click', () => {
    toggleTheme();
  });
});

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
  }
}