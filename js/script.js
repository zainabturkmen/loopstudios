const btn = document.getElementById("menu-btn");
const mneu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  mneu.classList.toggle("flex");
  mneu.classList.toggle("hidden");
}

// const btn = document.getElementById("menu-btn");
// const menu = document.getElementById("menu");

// btn.addEventListener("click", navToggle);

// function navToggle() {
//   btn.classList.toggle("open");
//   menu.classList.toggle("flex");
//   menu.classList.toggle("hidden");
// }
