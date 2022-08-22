(function () {
    var submitBtn = document.querySelector("button");
    var options = document.getElementsByName("rating");
    var thankYou = document.querySelector(".thank-you-container");
    var rating = document.querySelector(".rating-container");
    var thankYouText = document.querySelector(".thank-you__subtitle");
    var ratingValue = 0;
    options.forEach(function (option) {
        option.addEventListener("click", function () {
            if (option.checked) {
                ratingValue = option.value;
            }
        });
    });
    submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", function () {
        if (ratingValue === 0) {
            alert("Please select a rating");
        }
        else {
            rating === null || rating === void 0 ? void 0 : rating.classList.add("hide");
            thankYou === null || thankYou === void 0 ? void 0 : thankYou.classList.remove("hide");
            thankYouText === null || thankYouText === void 0 ? void 0 : thankYouText.textContent = "You selected ".concat(ratingValue, " out of 5");
        }
    });
})();
