const copyBtn = document.querySelector(".random-password-generator__btn--copy");
const refreshBtn = document.querySelector(
  ".random-password-generator__btn--refresh"
);

refreshBtn.addEventListener("click", (e) => {
  handleGeneratePassword(
    ".random-password-generator__range",
    ".random-password-generator__input",
    ".random-password-generator__length"
  );
});

copyBtn.addEventListener("click", () =>
  copyToClipBoard(".random-password-generator__input")
);

function handleGeneratePassword(
  inputSelector,
  outputSelector,
  lengthIndicatorSelector
) {
  const rangeInput = document.querySelector(inputSelector);
  const output = document.querySelector(outputSelector);
  const lengthIndicator = document.querySelector(lengthIndicatorSelector);

  rangeInput.addEventListener("input", () => {
    generatePassword(rangeInput.value);
  });
  generatePassword(rangeInput.value);

  function generatePassword(value) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxwz";
    lengthIndicator.textContent = value;

    let str = "";
    for (let i = 0; i < value; i++) {
      let randomVal = randomValue(characters.length);
      str += characters[randomVal];
    }
    output.value = str;
  }

  function randomValue(value) {
    return Math.floor(Math.random() * value);
  }
}
function copyToClipBoard(outputSelector) {
  const output = document.querySelector(outputSelector);
  output.select();
  document.execCommand("copy");
  output.blur();
}

handleGeneratePassword(
  ".random-password-generator__range",
  ".random-password-generator__input",
  ".random-password-generator__length"
);
