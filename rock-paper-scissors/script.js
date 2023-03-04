const userWeapons = document.querySelectorAll(".rock-paper-scissors__btn");

let computerScore = 0;
let useScore = 0;

function checker(userChoice) {
  const computerResult = document.querySelector(
    ".rock-paper-scissors__info-computer"
  );
  const userResult = document.querySelector(".rock-paper-scissors__info-user");
  const mainResult = document.querySelector(
    ".rock-paper-scissors__info-result"
  );
  const userScoreTable = document.querySelector(
    ".rock-paper-scissors__score-user span"
  );
  const computerScoreTable = document.querySelector(
    ".rock-paper-scissors__score-computer span"
  );

  const choisesObject = {
    rock: {
      rock: "draw",
      paper: "lose",
      scissors: "win",
    },
    paper: {
      rock: "win",
      paper: "draw",
      scissors: "lose",
    },
    scissors: {
      rock: "lose",
      paper: "win",
      scissors: "draw",
    },
  };

  const choises = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  document.querySelector(".rock-paper-scissors__info").style.display = "block";

  const computerChoice = choises[randomNumber];
  computerResult.querySelector("span").textContent =
    computerChoice.toUpperCase();
  userResult.querySelector("span").textContent = userChoice.toUpperCase();

  switch (choisesObject[userChoice][computerChoice]) {
    case "win":
      useScore++;
      mainResult.style.backgroundColor = "rgba(87, 244, 93, 0.98)";
      mainResult.textContent = "YOU WIN!!!";
      break;
    case "lose":
      computerScore++;
      mainResult.style.backgroundColor = "rgba(255, 59, 0, 0.98)";
      mainResult.textContent = "YOU LOSE...";
      break;
    case "draw":
      mainResult.style.backgroundColor = "rgba(27, 219, 219, 0.98)";
      mainResult.textContent = "DRAW!";
      break;
  }

  userScoreTable.textContent = useScore;
  computerScoreTable.textContent = computerScore;
}

userWeapons.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("rock-paper-scissors__btn--rock") ||
      e.target.parentNode.classList.contains("rock-paper-scissors__btn--rock")
    ) {
      checker("rock");
    }
    if (
      e.target.classList.contains("rock-paper-scissors__btn--paper") ||
      e.target.parentNode.classList.contains("rock-paper-scissors__btn--paper")
    ) {
      checker("paper");
    }
    if (
      e.target.classList.contains("rock-paper-scissors__btn--scissors") ||
      e.target.parentNode.classList.contains(
        "rock-paper-scissors__btn--scissors"
      )
    ) {
      checker("scissors");
    }
  });
});
