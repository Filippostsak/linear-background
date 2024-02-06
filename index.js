$(document).ready(function () {
  const css = $("h3");
  const color1 = $(".color1");
  const color2 = $(".color2");
  const body = $("#gradient");
  const randomButton = $("#randomButton");
  const button = $("button");
  const input = $("input");

  color1.on("input", setGradient);
  color2.on("input", setGradient);
  randomButton.on("click", generateRandomColors);

  generateRandomColors();

  function setGradient() {
    const gradient = `linear-gradient(to right, ${color1.val()}, ${color2.val()})`;
    body.css("background", gradient);
    css.text(gradient + ";");
    button.css("background", gradient);
  }

  function generateRandomColors() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();

    color1.val(randomColor1);
    color2.val(randomColor2);

    setGradient();
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
