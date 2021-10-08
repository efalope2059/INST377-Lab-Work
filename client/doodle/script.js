// eslint-disable-next-line linebreak-style
// Tells JS file to run after intial HTML has been loaded 
document.addEventListener('DOMContentLoaded', () => {

  // .querySelector allow me to pick things from the HTML
  // .createElement allows me to create a div in the page
  const grid = document.querySelector('.grid')
  const doodler = document.createElement('div')

  // Add doodler to grid with. appendChild
  // Add class to doodler with .classList
  function createDoodle() {
      grid.appendChild(doodler)
      doodler.classList.add('doodler')
    }

    createDoodle()
})

