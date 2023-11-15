var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");
var button = document.querySelector("button");
var input = document.querySelectorAll("input")

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", generateRandomColors);

generateRandomColors(); 

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  button.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function generateRandomColors() {
  var randomColor1 = getRandomColor();
  var randomColor2 = getRandomColor();

  color1.value = randomColor1;
  color2.value = randomColor2;

  setGradient();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




