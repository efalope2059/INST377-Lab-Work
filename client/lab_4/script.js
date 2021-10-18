// Rather than using "document.getElementsByClassName" please use "document.querySelectorAll"
// Rather than using "document.getElementByID" please use "document.querySelector"

let slidePositon = 0;
const slides = document.querySelectorAll('.carousel__item');
const totalSlides = slides.length;

// use # to reference ID and . to refernce classes
document.querySelector('#carousel-button--next')
  .addEventListener('click', () => {
    moveToNextSlide();
  });

document.querySelector('#carousel-button--prev')
  .addEventListener('click', () => {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
      slide.classList.remove('carousel__item--visible');
      slide.classList.add('carousel__item--hidden');
  }

  slides[slidePositon].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePositon === totalSlides - 1) {
    slidePositon = 0;
  } else {
    slidePositon += 1;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePositon === 0) {
    slidePositon = totalSlides - 1;
  } else {
    slidePositon -= 1;
  }
  updateSlidePosition();
}