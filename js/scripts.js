const personInfo = {
  name: "Vasek Mlejnsky",
  position: "Founder and software developer",
  hobbies: "Basketball and building software for future AI overlords",
  currentJob: "CEO at https://e2b.dev",
  links: {
    twitter: "https://twitter.com/mlejva",
    linkedin: "https://linkedin.com/in/mlejva",
    github: "https://github.com/mlejva",
  },
};

let theme = localStorage.getItem("theme") || "light";

document.addEventListener("DOMContentLoaded", () => {
  setTheme(theme);
  populateProfileInfo();
});

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  setTheme(theme);
  localStorage.setItem("theme", theme);
}

function setTheme(theme) {
  const body = document.body;
  body.classList.remove("light", "dark");
  body.classList.add(theme);
}

function populateProfileInfo() {
  document.getElementById("name").textContent = personInfo.name;
  document.getElementById("position").textContent = personInfo.position;
  document.getElementById("hobbies").textContent = personInfo.hobbies;
  document.getElementById("currentJob").textContent = personInfo.currentJob;
  document.getElementById("twitterLink").href = personInfo.links.twitter;
  document.getElementById("linkedinLink").href = personInfo.links.linkedin;
  document.getElementById("githubLink").href = personInfo.links.github;
}

document.getElementById("themeToggle").addEventListener("click", toggleTheme);