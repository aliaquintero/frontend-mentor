const form = document.querySelector("#form");
const email = document.querySelector("#email");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    e.preventDefault();
    error.classList.remove("hidden");
    email.classList.add("input-error");
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing || email.validity.typeMismatch) {
    error.textContent = "Please provide a valid email address";
  }
}
