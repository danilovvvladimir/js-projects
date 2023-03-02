const fields = document.querySelectorAll(".guess__field");
const backBtn = document.querySelector(".guess__back-btn");
const meBtn = document.querySelector(".guess__btn-me");
const youBtn = document.querySelector(".guess__btn-you");

function hideAllFields() {
  fields.forEach((item) => (item.style.display = "none"));
}
function showField(i = 0) {
  fields[i].style.display = "block";

  if (fields[0].style.display != "none") {
    backBtn.style.display = "none";
  } else {
    backBtn.style.display = "block";
  }
}
backBtn.addEventListener("click", () => {
  hideAllFields();
  showField(0);
});

meBtn.addEventListener("click", () => {
  hideAllFields();
  showField(1);
  handleUserSession();
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function handleUserSession() {
  const userAnswerInput = document.querySelector(".guess__user-input");
  const userHint = document.querySelector(".guess__user-hint");

  const guessesCounterText = document.querySelector(".guess__amount span");
  const guessesText = document.querySelector(".guess__guesses span");

  const guessUserBtn = document.querySelector(".guess__btn-user");
  userHint.textContent = "";
  userAnswerInput.value = "";
  guessesCounterText.textContent = "0";
  guessesText.textContent = "none";

  let guessesCounter = 0;
  let guesses = [];
  const answer = generateRandomNumber();
  console.log(answer);

  function play() {
    const userAnswer = userAnswerInput.value;

    if (userAnswer < 0 || userAnswer > 100) {
      alert("Введите число от 0 до 100");
      return;
    }

    guessesCounter++;
    guesses.push(userAnswer);
    if (userAnswer < answer) {
      userHint.textContent = "Моё число больше вашего.";
      guessesCounterText.textContent = guessesCounter;
      guessesText.textContent = guesses;
    }

    if (userAnswer > answer) {
      userHint.textContent = "Моё число меньше вашего.";
      guessesCounterText.textContent = guessesCounter;
      guessesText.textContent = guesses;
    }

    if (userAnswer == answer) {
      userHint.textContent = "Вы угадали моё число!!! Сыграем ещё раз!";
      setTimeout(handleUserSession, 2000);
    }
  }

  guessUserBtn.addEventListener("click", play);
}

youBtn.addEventListener("click", () => {
  hideAllFields();
  showField(2);
  handleBotSession();
});

function handleBotSession() {
  const guessBotText = document.querySelector(".guess__bot-number");
  guessBotText.style.display = "none";
  const guessBotTextNumber = document.querySelector(".guess__bot-number span");

  const guessBotBtnTrigger = document.querySelector(".guess__btn-ready");
  guessBotBtnTrigger.style.display = "";

  const guessBotBtns = document.querySelector(".guess__bot-hints");
  guessBotBtns.style.display = "none";

  const guessBotBtnCorrect = document.querySelector(".guess__btn-correct");
  const guessBotBtnLesser = document.querySelector(".guess__btn-lesser");
  const guessBotBtnGreater = document.querySelector(".guess__btn-greater");

  const botHint = document.querySelector(".guess__bot-hint");
  botHint.textContent = "";

  const guessesCounterText = document.querySelector(".guess__bot-amount span");
  const guessesText = document.querySelector(".guess__bot-guesses span");

  guessesCounterText.textContent = "";
  guessesText.textContent = "";

  let guessesCounter = 0;
  let guesses = [];

  let possibleAnswer = 0;
  let totalMax = 100;
  let totalMin = 0;
  let totalNumber = 100;

  let isPlaying = false;

  let hint = -1;
  console.log(hint);

  guessBotBtnCorrect.addEventListener("click", () => {
    hint = 0;
    play();
  });
  guessBotBtnLesser.addEventListener("click", () => {
    hint = -1;
    play();
  });
  guessBotBtnGreater.addEventListener("click", () => {
    hint = 1;
    play();
  });

  function play() {
    if (!isPlaying) {
      guessBotText.style.display = "block";
      guessBotBtnTrigger.style.display = "none";
      guessBotBtns.style.display = "block";
      isPlaying = true;
    }

    // todo: fix
    // switch (hint) {
    //   case -1:
    //     totalMax = possibleAnswer;
    //     totalNumber = Math.round(totalNumber / 2);
    //     possibleAnswer = totalMin + totalNumber;
    //     totalMax = possibleAnswer;
    //     break;
    //   case 0:
    //     botHint.textContent = "Я угадал ваше число!!! Сыграем ещё раз!";
    //     hint = -1;
    //     setTimeout(handleBotSession, 2000);
    //     return;
    //   case 1:
    //     totalMin = totalNumber;
    //     totalNumber = Math.round(totalNumber / 2);
    //     possibleAnswer = totalMin + totalNumber;
    //     totalMax = possibleAnswer;
    //     break;
    // }
    // console.log("Min" + totalMin);
    // console.log("Max" + totalMax);
    // console.log("Total" + totalNumber);

    if (hint != 0) {
      guesses.push(possibleAnswer);
      guessesCounter++;
    }

    guessesCounterText.textContent = guessesCounter;
    guessesText.textContent = guesses;
    guessBotTextNumber.textContent = possibleAnswer;
  }

  guessBotBtnTrigger.addEventListener("click", play);
}

hideAllFields();
showField();

// user is guessing
