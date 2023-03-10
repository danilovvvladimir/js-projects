moveHands();
const timer = setInterval(() => {
  moveHands();
}, 1000);

function getCurrentDate() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  return {
    hours,
    minutes,
    seconds,
  };
}
function moveHands() {
  const currentTime = getCurrentDate();

  const hoursRotateDeg = currentTime.hours * 30 + currentTime.minutes / 2;
  const minutesRotateDeg = currentTime.minutes * 6 + currentTime.seconds / 10;
  const secondsRotateDeg = currentTime.seconds * 6;

  const hoursHand = document.querySelector(".analog-clock__hand--hours");
  const minutesHand = document.querySelector(".analog-clock__hand--minutes");
  const secondsHand = document.querySelector(".analog-clock__hand--seconds");

  hoursHand.style.transform = `rotate(${hoursRotateDeg}deg)`;
  minutesHand.style.transform = `rotate(${minutesRotateDeg}deg)`;
  secondsHand.style.transform = `rotate(${secondsRotateDeg}deg)`;
}
