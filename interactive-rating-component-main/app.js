const submitButton = document.querySelector("#submit");
const component = document.querySelector("#rating-component");
const title = document.querySelector(".rating-title");
const description = document.querySelector(".rating-description");
const selectedScore = document.querySelector("#selected-score");
const ratingContainer = document.querySelector(".rating-container");
const ratingScore = document.querySelectorAll(".rating-score");
const mainComponent = document.querySelector(".main-component");
const image = document.querySelector(".thanks-svg");
const star = document.querySelector(".star");
const buttonAlert = document.querySelector(".button-alert");

for (i = 0; i < ratingScore.length; i++) {
  ratingScore[i].addEventListener("click", function () {
    for (j = 0; j < ratingScore.length; j++) {
      ratingScore[j].classList.remove("selected");
    }
    this.classList.add("selected");
    selectedScore.innerHTML = `You selected ${this.innerText} out of 5.`;
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (!selectedScore.innerHTML) {
    buttonAlert.classList.remove("hidden");
    buttonAlert.innerText = "Please select a rating!";
  } else {
    title.innerText = "Thank you!";
    description.innerText =
      "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    this.classList.add("hidden");
    selectedScore.classList.toggle("hidden");
    ratingContainer.classList.add("hidden");
    mainComponent.classList.add("center");
    image.classList.toggle("hidden");
    star.classList.add("hidden");
    buttonAlert.classList.add("hidden");
  }
});
