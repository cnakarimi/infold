let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__items");
const totalSlides = slides.length;
document
  .getElementById("carousel__button__prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });
document
  .getElementById("carousel__button__next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidesPosition();
}
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidesPosition();
}
function updateSlidesPosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }
  slides[slidePosition].classList.add("carousel__item--visible");
}
