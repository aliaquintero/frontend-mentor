const rangeInput = document.querySelector("#range-input");
const billingToggle = document.querySelector("#billing-toggle");

const pricing = {
  views: ["10K", "50K", "100K", "500K", "1M"],
  monthly: [8, 12, 16, 24, 36],
  yearly: [6, 9, 12, 18, 27],
};

rangeInput.value = rangeInput.length / 2;
pageviews.textContent = pricing.views[rangeInput.value - 1];
price.textContent = `$${pricing.monthly[rangeInput.value - 1]}.00`;
billingToggle.checked = false;

rangeInput.addEventListener("input", updateValue);
billingToggle.addEventListener("click", updateValue);

function updateValue(e) {
  pageviews.textContent = pricing.views[rangeInput.value - 1];

  if (!billingToggle.checked) {
    price.textContent = `$${pricing.monthly[rangeInput.value - 1]}.00`;
  } else {
    price.textContent = `$${pricing.yearly[rangeInput.value - 1]}.00`;
  }
}
