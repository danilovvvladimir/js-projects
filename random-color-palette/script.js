const refreshBtn = document.querySelector(".color-palette__refresh-btn");
const paletteBoxesContainer = document.querySelector(".color-palette__list");

const MAX_PALETTE_BOXES = 10;

const generatePalette = () => {
  paletteBoxesContainer.innerHTML = "";
  for (let i = 0; i < MAX_PALETTE_BOXES; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
    <div class="color__rect-box" style="background: ${randomHex}"></div>
    <span class="color__hex-value">${randomHex}"</span>`;

    color.addEventListener("click", () => copyColor(color, randomHex));
    paletteBoxesContainer.append(color);
  }
};

generatePalette();

const copyColor = (element, hexValue) => {
  const colorElement = element.querySelector(".color__hex-value");

  navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.textContent = "Copied";
    setTimeout(() => (colorElement.textContent = hexValue), 1000);
  });
};

refreshBtn.addEventListener("click", generatePalette);
