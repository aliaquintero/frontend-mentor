const rangeInput = document.querySelector("#range-input");
const billingToggle = document.querySelector("#billing-toggle");

const pricing = {
  views: ["10K", "50K", "100K", "500K", "1M"],
  monthly: [8, 12, 16, 24, 36],
  yearly: [6, 9, 12, 18, 27],
};

rangeInput.value = rangeInput.length / 2;
pageviews.textContent = pricing.views[rangeInput.value - 1];
<<<<<<< HEAD
price.textContent = pricing.monthly[rangeInput.value - 1];
=======
price.textContent = `$${pricing.monthly[rangeInput.value - 1]}.00`;
billingToggle.checked = false;
>>>>>>> 3ad520b (fixed toggle, refactored, css layout)

rangeInput.addEventListener("input", updateValue);
billingToggle.addEventListener("click", updateValue);

billingToggle.addEventListener("change", changePrice);

function changePrice(e) {
  console.log("toggled");
}

function updateValue(e) {
<<<<<<< HEAD
  let i = e.target.value - 1;

  pageviews.textContent = pricing.views[i];

  if (!billingToggle.checked) {
    price.textContent = pricing.monthly[i];
  } else {
    price.textContent = pricing.yearly[i];
=======
  pageviews.textContent = pricing.views[rangeInput.value - 1];

  if (!billingToggle.checked) {
    price.textContent = `$${pricing.monthly[rangeInput.value - 1]}.00`;
  } else {
    price.textContent = `$${pricing.yearly[rangeInput.value - 1]}.00`;
>>>>>>> 3ad520b (fixed toggle, refactored, css layout)
  }
}
