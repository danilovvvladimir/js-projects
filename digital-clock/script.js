const digitalClockHours = document.querySelector(".digital-clock__hours");
const digitalClockMinutes = document.querySelector(".digital-clock__minutes");
const digitalClockSeconds = document.querySelector(".digital-clock__seconds");

updateClock();
setInterval(updateClock, 1000);

function getZeroNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function updateClock() {
  const newDate = new Date();
  const hours = newDate.getUTCHours() + 3;
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  digitalClockHours.textContent = getZeroNumber(hours);
  digitalClockMinutes.textContent = getZeroNumber(minutes);
  digitalClockSeconds.textContent = getZeroNumber(seconds);
}
