const inputs = document.getElementsByTagName("input");
const button = document.querySelector("button");
const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const error = document.querySelectorAll(".error");

const checkValidity = (e) => {
  e.preventDefault();
  for (let input of inputs) {
    let inputName = input.name;
    let inputElem = document.getElementById(inputName);
    if (inputName === "email" && inputElem.value.length > 0) {
      let validateEmail = inputElem.value.match(emailRegex);
      // if the email is not the correct format
      if (!validateEmail) {
        e.preventDefault();
        inputElem.classList.add("error-border");
        inputElem.nextElementSibling.classList.remove("hidden");
        inputElem.nextElementSibling.innerText =
          "Looks like this is not an email";
      }
      // email is the correct format and is filled out
      else {
        inputElem.classList.remove("error-border");
        inputElem.nextElementSibling.classList.add("hidden");
        inputElem.nextElementSibling.innerText = "";
      }
    }
    // if the email field is empty
    else if (inputName === "email" && inputElem.value.length === 0) {
      e.preventDefault();
      inputElem.classList.add("error-border");
      inputElem.nextElementSibling.classList.remove("hidden");
      inputElem.nextElementSibling.innerText = "Field cannot be empty";
    }
    // if the other input fields are empty
    else if (inputElem.value.length === 0) {
      e.preventDefault();
      inputElem.classList.add("error-border");
      inputElem.nextElementSibling.classList.remove("hidden");
      inputElem.nextElementSibling.innerText = "Field cannot be empty";
    }
    // if the field is filled out
    else {
      inputElem.classList.remove("error-border");
      inputElem.nextElementSibling.classList.add("hidden");
      inputElem.nextElementSibling.innerText = "";
    }
  }
};

button.addEventListener("click", checkValidity);
