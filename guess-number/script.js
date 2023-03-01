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
});

youBtn.addEventListener("click", () => {
  hideAllFields();
  showField(2);
});

hideAllFields();
showField();
