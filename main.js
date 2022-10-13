let view = document.getElementById("pageView");
let price = document.getElementById("price");
let slider = document.getElementById("priceSlider");
let toggle = document.getElementById("billing");
let pageViews = ["10k", "50k", "100k", "500k", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

toggle.addEventListener("change", () => {
  if (isYearly === false) {
    isYearly = true;
  } else {
    isYearly = false;
  }

  updateValue();
});

function updateValue() {
  if (isYearly) {
    price.innerHTML = `$${perMonth[slider.value] * 0.75}.00`;
  } else {
    price.innerHTML = `$${perMonth[slider.value]}.00`;
  }
}

slider.addEventListener("input", () => {
  updateValue();
  view.innerHTML = pageViews[slider.value];
});
