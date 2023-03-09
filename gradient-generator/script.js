// logic: на каждую кнопку свой обработчик события(мб делегированием), и передавать первым арументом
// data direction mb??

const outputTextarea = document.querySelector(
  ".gradient-generator__output-textarea"
);
const copyBtn = document.querySelector(".gradient-generator__output-copybtn");

function handleDirectionSetting() {
  const arrowsBtns = document.querySelectorAll(".gradient-generator__dir-btn");
  let direction = "up";
  hideActiveClass();
  arrowsBtns[0].classList.add("active");

  arrowsBtns.forEach((item) => {
    item.addEventListener("click", setDirection);
  });

  function setDirection(e) {
    hideActiveClass();
    showActiveClass(e.currentTarget);
    direction = e.currentTarget.getAttribute("data-direction");
    console.log(direction);
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

handleDirectionSetting();
