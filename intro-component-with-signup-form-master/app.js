const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");
const button = document.querySelector("button");
const error = document.querySelectorAll(".error");
const tooltip = document.querySelectorAll(".error-tooltip");
const hidden = document.querySelectorAll(".hidden");
const inputs = [firstName, lastName, email, password];

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const namePattern = /([a-zA-Z])\w+/g;
const passPattern = /[a-zA-Z0-9]/g;

button.addEventListener("click", function (e) {
  inputs.forEach(function (i) {
    const value = i.value;
    const sibling = i.nextElementSibling;
    if (i === email) {
      if (!value.match(emailPattern)) {
        e.preventDefault();
        email.classList.add("error");
        sibling.classList.remove("hidden");
        sibling.innerText = "Looks like this is not an email";
      } else {
        email.classList.remove("error");
        sibling.classList.add("hidden");
      }
    } else if (i === firstName) {
      if (!value.match(namePattern)) {
        e.preventDefault();

        firstName.classList.add("error");
        sibling.classList.remove("hidden");
        sibling.innerText = "First Name cannot be empty.";
      } else {
        email.classList.remove("error");
        sibling.classList.add("hidden");
      }
    } else if (i == lastName) {
      if (!value.match(namePattern)) {
        e.preventDefault();

        lastName.classList.add("error");
        sibling.classList.remove("hidden");
        sibling.innerText = "Last Name cannot be empty.";
      } else {
        email.classList.remove("error");
        sibling.classList.add("hidden");
      }
    } else if (i === password) {
      if (!value.match(passPattern)) {
        e.preventDefault();
        password.classList.add("error");
        sibling.classList.remove("hidden");
        sibling.innerText = "Password cannot be empty.";
      } else {
        email.classList.remove("error");
        sibling.classList.add("hidden");
      }
    }
  });
});
