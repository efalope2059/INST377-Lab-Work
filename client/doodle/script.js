// Tells JS file to run after intial HTML has been loaded
document.addEventListener('DOMContentLoaded', () => {
  // .querySelector allow me to pick things from the HTML
  // .createElement allows me to create a div in the page

  const grid = document.querySelector('.grid');
  const doodler = document.createElement('div');
  let doodlerLeftSpace = 50;
  let doodlerBottomSpace = 250;
  let isGameOver = false;
  let platformCount = 5;
  let platforms = [];
  let upTimerId;
  let downTimerId;

  // Add doodler to grid with. appendChild
  // Add class to doodler with .classList
  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add('doodler');
    doodler.style.left = `${doodlerLeftSpace}px`;
    doodler.style.bottom = `${doodlerBottomSpace}px`;
  }

  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315;
      this.bottom = newPlatBottom;
      this.visual = document.createElement('div');

      const {visual} = this; // change back to this.visual //
      visual.classList.add('platform');
      visual.style.left = `${this.left}px`;
      visual.style.bottom = `${this.bottom}px`;
      grid.appendChild(visual);
    }
  }

  function createPlatforms() {
    for (let i = 0; i < platformCount; i += 1) {
      const platGap = 600 / platformCount;
      const newPlatBottom = 100 + i * platGap;
      const newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform); // pushes into array//
      console.log(platforms);
    }
  }

  function movePlatforms() {
    if (doodlerBottomSpace > 200) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;
        const {visual} = platform;
        visual.style.bottom = `${platform.bottom}px`;
      });
    }
  }

  function jump() {
    upTimerId = setInterval(() => {
      doodlerBottomSpace += 20;
      doodler.style.bottom = `${doodlerBottomSpace}px`;
    }, 30);
  }
  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
      setInterval(movePlatforms, 30);
      jump();
    }
    // attach to a button
  }
  start();
});
