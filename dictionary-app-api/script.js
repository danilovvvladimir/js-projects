const result = document.querySelector(".dictionary__result");
const resultTitle = document.querySelector(".dictionary__result-word-title");
const resultSpeechPart = document.querySelector(
  ".dictionary__result-details-speechpart"
);
const resultPhonetic = document.querySelector(".dictionary__result-phonetic");
const resultSoundBtn = document.querySelector(".dictionary__result-sound-btn");
const resultMeaning = document.querySelector(".dictionary__result-meaning");
const resultExample = document.querySelector(".dictionary__result-example");
const sound = document.querySelector("#sound");

const searchBtn = document.querySelector(".dictionary__search-btn");

resultSoundBtn.addEventListener("click", () => {
  playSound();
});

searchBtn.addEventListener("click", () => {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  let inputWord = document.querySelector(".dictionary__search-input").value;
  handleFetch(url, inputWord);
});

function playSound() {
  sound.play();
}

async function handleFetch(url, word) {
  try {
    const response = await fetch(`${url}${word}`);
    const data = await response.json();

    result.style.display = "block";
    resultSoundBtn.style.display = "block";
    resultTitle.textContent = word;
    resultSpeechPart.textContent = data[0].meanings[0].partOfSpeech;
    resultPhonetic.textContent = data[0].phonetic;
    resultMeaning.textContent = data[0].meanings[0].definitions[0].definition;
    resultExample.textContent =
      data[0].meanings[0].definitions[0].example || "";
    sound.setAttribute(
      "src",
      `${data[0].phonetics[1]?.audio || data[0].phonetics[0]?.audio}`
    );
  } catch (error) {
    resultTitle.textContent = `${word} not found`;
    resultSpeechPart.textContent = "";
    resultPhonetic.textContent = "";
    resultMeaning.textContent = "";
    resultExample.textContent = "";
    resultSoundBtn.style.display = "none";
  }
}
