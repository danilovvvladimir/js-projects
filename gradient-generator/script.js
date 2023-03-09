"use strict";

function generateGradiend() {
  const copyBtn = document.querySelector(".gradient-generator__output-copybtn");
  const arrowsBtns = document.querySelectorAll(".gradient-generator__dir-btn");
  const colorInputs = document.querySelectorAll(
    ".gradient-generator__input-color"
  );
  const outputTextarea = document.querySelector(
    ".gradient-generator__output-textarea"
  );

  let direction = "to top";
  handleDirectionSetting();
  generateCode(outputTextarea);
  colorInputs.forEach((item) => {
    item.addEventListener("input", () => generateCode(outputTextarea));
  });
  arrowsBtns.forEach((item) => {
    item.addEventListener("click", () => generateCode(outputTextarea));
  });

  copyBtn.addEventListener("click", () => copyText(outputTextarea, copyBtn));

  function handleDirectionSetting() {
    hideActiveClass();
    arrowsBtns[0].classList.add("active");

    arrowsBtns.forEach((item) => {
      item.addEventListener("click", setDirection);
    });

    function setDirection(e) {
      hideActiveClass();
      showActiveClass(e.currentTarget);
      direction = e.currentTarget.getAttribute("data-direction");
    }

    function hideActiveClass() {
      arrowsBtns.forEach((item) => {
        item.classList.remove("active");
      });
    }

    function showActiveClass(neededItem) {
      arrowsBtns.forEach((item, index) => {
        if (neededItem == item) {
          arrowsBtns[index].classList.add("active");
        }
      });
    }
  }

  function getInputsColor(colorInputs) {
    return [colorInputs[0].value, colorInputs[1].value];
  }

  function generateCode(output) {
    const [colorOne, colorTwo] = getInputsColor(colorInputs);

    output.value = `background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo});`;
    document.body.style.cssText += output.value;
  }

  function copyText(output, copyBtn) {
    output.select();
    document.execCommand("copy");
    output.blur();
    const btnText = copyBtn.textContent;
    copyBtn.textContent = "COPIED";
    setTimeout(() => {
      copyBtn.textContent = btnText;
    }, 3000);
  }
}

generateGradiend();
