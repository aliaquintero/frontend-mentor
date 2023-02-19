const rangeInput = document.querySelector("#range-input");
const billingToggle = document.querySelector("#billing-toggle");

const Pricing = {
  views: ["10K", "50K", "100K", "500K", "1M"],
  monthly: [8, 12, 16, 24, 36],
  yearly: [6, 9, 12, 18, 27],
};

// default values
rangeInput.value = rangeInput.length / 2;
pageviews.textContent = Pricing.views[rangeInput.value - 1];
price.textContent = Pricing.monthly[rangeInput.value - 1];

rangeInput.addEventListener("input", updateValue);

function updateValue(e) {
  let i = e.target.value - 1;

  pageviews.textContent = Pricing.views[i];

  if (!billingToggle.checked) {
    price.textContent = Pricing.monthly[i];
  } else {
    price.textContent = Pricing.yearly[i];
  }
}
