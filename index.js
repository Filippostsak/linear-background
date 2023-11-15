let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.getElementById("randomButton");
let button = document.querySelector("button");
let input = document.querySelectorAll("input");

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", generateRandomColors);

generateRandomColors();

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  button.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function generateRandomColors() {
  let randomColor1 = getRandomColor();
  let randomColor2 = getRandomColor();

  color1.value = randomColor1;
  color2.value = randomColor2;

  setGradient();
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
