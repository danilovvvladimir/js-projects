const jokeTextContainer = document.querySelector(".jokes-generator__joke");
const jokeBtn = document.querySelector(".jokes-generator__btn");

const jokeUrl =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

getJoke(jokeUrl);
jokeBtn.addEventListener("click", () => getJoke(jokeUrl));

function getJoke(url) {
  fetch(url)
    .then((data) => data.json())
    .then((item) => (jokeTextContainer.textContent = `${item.joke}`));
}
