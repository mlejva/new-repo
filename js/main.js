document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const positionElement = document.getElementById("position");
  const hobbiesElement = document.getElementById("hobbies");
  const currentJobElement = document.getElementById("currentJob");
  const websiteLinkElement = document.getElementById("websiteLink");

  nameElement.textContent = "Vasek Mlejnsky";
  positionElement.textContent = "Founder and software developer";
  hobbiesElement.textContent = "Basketball and building software for future AI overlords";
  currentJobElement.textContent = "CEO at";
  websiteLinkElement.href = "https://e2b.dev";
  websiteLinkElement.textContent = "e2b.dev";
});