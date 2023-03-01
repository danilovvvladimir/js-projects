const movingText = document.querySelector(".text");

window.addEventListener("mousemove", (e) => {
  let cursorX = e.pageX;
  let cursorY = e.pageY;

  let transitedX = (7 * cursorX) / 570 + 40;
  let transitedY = (7 * cursorY) / 570 + 40;

  movingText.style.backgroundPosition = `${-transitedX}% ${transitedY}%`;
});
