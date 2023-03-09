const coin = document.querySelector(".flip-coin__wrapper");
const coinBtn = document.querySelector(".flip-coin__btn");

coinBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  disableButton();
  if (randomNumber) {
    setTimeout(() => {
      coin.style.animation = "flip-heads 3s forwards";
    }, 100);
  } else {
    setTimeout(() => {
      coin.style.animation = "flip-tails 3s forwards";
    }, 100);
  }

  function disableButton() {
    coinBtn.disabled = true;
    setTimeout(() => {
      coinBtn.disabled = false;
    }, 3000);
  }
});
