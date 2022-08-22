(() => {
  const submitBtn = document.querySelector("button");
  const options = document.getElementsByName("rating");
  const thankYou = document.querySelector(".thank-you-container");
  const rating = document.querySelector(".rating-container");
  let thankYouText = document.querySelector(".thank-you__subtitle");
  let ratingValue = 0;

  options.forEach((option) => {
    option.addEventListener("click", function () {
      if (option.checked) {
        ratingValue = option.value;
      }
    });
  });

  submitBtn?.addEventListener("click", function () {
    if (ratingValue === 0) {
      alert("Please select a rating");
    } else {
      rating?.classList.add("hide");
      thankYou?.classList.remove("hide");

      thankYouText?.textContent = `You selected ${ratingValue} out of 5`;
    }
  });
})();
