const colorSlidesInput = document.querySelectorAll(".color-slider__input");
const colorSliderOutput = document.querySelector(".color-slider__output");

colorSliderOutput.addEventListener("click", () => {
  const tempValue = colorSliderOutput.textContent;

  navigator.clipboard.writeText(tempValue).then(() => {
    colorSliderOutput.textContent = "Copied";
    setTimeout(() => (colorSliderOutput.textContent = tempValue), 1000);
  });
});

colorSlidesInput.forEach((item) => {
  item.addEventListener("input", colors);
});

colors();

function colors() {
  const red = document.querySelector(".color-slider__input--red");
  const green = document.querySelector(".color-slider__input--green");
  const blue = document.querySelector(".color-slider__input--blue");
  const alpha = document.querySelector(".color-slider__input--alpha");

  document.body.style.background = `rgba(${red.value}, ${green.value}, ${
    blue.value
  }, ${alpha.value / 100})`;
  colorSliderOutput.textContent = `rgba(${red.value}, ${green.value}, ${
    blue.value
  }, ${alpha.value / 100})`;
}
