const dark = document.getElementById("darkMode");
const light = document.getElementById("lightMode");
const colorFull = document.getElementById("colorFull");

function turnToDark() {
  document.body.classList.remove("color-theme");
  document.body.classList.add("dark-theme");
  console.log("I'm Working");
}

function turnToLight() {
  document.body.classList.remove("dark-theme", "color-theme");
  console.log("I'm Working2");
}

function turnToColor() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("color-theme");
  console.log("I'm Working2");
}

dark.addEventListener("click", turnToDark);
light.addEventListener("click", turnToLight);
colorFull.addEventListener("click", turnToColor);
