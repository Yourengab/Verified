const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
const imgToggle = document.querySelector(".search input");
const searchBar = document.querySelector("section");
imgToggle.addEventListener("click", function () {
  searchBar.classList.toggle("fade");
});
const courseBtn = document.querySelector(".cor-btn input");
const courseNav = document.querySelector(".cor-responsive");
courseBtn.addEventListener("click", function () {
  courseNav.classList.toggle("down-fade");
});
