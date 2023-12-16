const slidesContainer = document.getElementById("slides-container")
const slide = document.querySelector(".slide")
const prevButton = document.getElementById("slide-arrow-prev")
const nextButton = document.getElementById("slide-arrow-next")

nextButton.addEventListener("click", (e) => {
    const containerWidth = slidesContainer.offsetWidth;
    slidesContainer.scrollLeft += containerWidth;
});

prevButton.addEventListener("click", (e) => {
    const containerWidth = slidesContainer.offsetWidth;
    slidesContainer.scrollLeft -= containerWidth;
});
