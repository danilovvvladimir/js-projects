const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const userInput = document.querySelector(".age-calculator__input-date");
const calcBtn = document.querySelector(".age-calculator__btn");

function calculateAge(userInput) {
  if (userInput.value == "") {
    return {
      finalYear: "-",
      finalMonth: "-",
      finalDay: "-",
    };
  }
  const userDate = new Date(userInput.value);
  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  const userYear = userDate.getFullYear();
  const userMonth = userDate.getMonth();
  const userDay = userDate.getDate();
  if (userDate > today) {
    return {
      finalYear: "-",
      finalMonth: "-",
      finalDay: "-",
    };
  }

  leapChecker(userYear);

  function leapChecker(year) {
    if (year % 4 == 0) {
      months[1] = 29;
    } else {
      months[1] = 28;
    }
  }

  let finalYear, finalMonth, finalDay;
  finalYear = todayYear - userYear;

  if (todayMonth < userMonth) {
    finalYear--;
    finalMonth = 12 + todayMonth - userMonth;
  } else {
    finalMonth = todayMonth - userMonth;
  }

  if (todayDay < userDay) {
    finalMonth--;
    finalDay = months[finalMonth] + todayDay - userDay;
  } else {
    finalDay = todayDay - userDay;
  }

  return {
    finalYear,
    finalMonth,
    finalDay,
  };
}

function displayAge() {
  const userYears = document.querySelector(
    ".age-calculator__output--years span"
  );
  const userMonths = document.querySelector(
    ".age-calculator__output--months span"
  );
  const userDays = document.querySelector(".age-calculator__output--days span");

  const finalDate = calculateAge(userInput);
  userYears.textContent = finalDate.finalYear;
  userMonths.textContent = finalDate.finalMonth;
  userDays.textContent = finalDate.finalDay;
}

calcBtn.addEventListener("click", displayAge);
