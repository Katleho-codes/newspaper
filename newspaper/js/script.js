const burger = document.getElementById("burger");
const ul = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("show-x");
  ul.classList.toggle("show");
});

const form = document.getElementById("form");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
});
 