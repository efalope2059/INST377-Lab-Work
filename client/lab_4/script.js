// Rather than using "document.getElementsByClassName" please use "document.querySelectorAll"
// Rather than using "document.getElementByID" please use "document.querySelector"

let slidePositon = 0;
const slides = document.querySelectorAll('.carousel__item');
const totalSlides = slides.length;

document.querySelector('.carousel-button--next')
  .addEventListener('click', () => {
    console.log('helllllllllooooooo');
  });
