const stopwatchStartBtn = document.querySelector(".stopwatch__button-start");
const stopwatchPauseBtn = document.querySelector(".stopwatch__button-pause");
const stopwatchResetBtn = document.querySelector(".stopwatch__button-reset");

const timer = document.querySelector(".stopwatch__timer");
let stopwatch;
let isPaused = false;
let [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];

stopwatchStartBtn.addEventListener("click", () => {
  if (!isPaused) {
    clearInterval(stopwatch);
  } else {
    isPaused = false;
  }
  stopwatch = setInterval(updateStopwatch, 10);
});

stopwatchPauseBtn.addEventListener("click", () => {
  isPaused = true;
  clearInterval(stopwatch);
});

stopwatchResetBtn.addEventListener("click", () => {
  clearInterval(stopwatch);
  [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
  timer.textContent = `${getZeroNum(hours, 10)}:${getZeroNum(
    minutes,
    10
  )}:${getZeroNum(seconds, 10)}:${getZeroNum(millisecond, 100, "00")}`;
});

const updateStopwatch = () => {
  millisecond += 10;
  if (millisecond === 1000) {
    millisecond = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let msText, sText, mText, hText;
  msText = millisecond;
  sText = getZeroNum(seconds, 10);
  mText = getZeroNum(minutes, 10);
  hText = getZeroNum(hours, 10);

  if (millisecond < 10) {
    msText = getZeroNum(millisecond, 10, "00");
  }
  if (millisecond < 100 && millisecond > 10) {
    msText = getZeroNum(millisecond, 100);
  }

  timer.textContent = `${hText}:${mText}:${sText}:${msText}`;
};

const getZeroNum = (number, trigger, zeros = "0") => {
  return number < trigger ? zeros + number : number;
};
