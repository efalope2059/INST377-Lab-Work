/* eslint-disable linebreak-style */
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  const birdLeft = 200;
  let birdBottom = 100;
  const gravity = 2;
  let isGameOver = false;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = `${birdBottom}px`;
    bird.style.left = `${birdLeft}px`;
  }
  const gameTimerId = setInterval(startGame, 20);

  function control(e) {
    if (e.keyCode === 32 || e.keyCode === 38) {
      jump();
    }
  }

  document.addEventListener('keyup', control);

  function jump () {
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = `${birdBottom}px`;
    console.log(birdBottom);
  }

  function generateObstacle() {
    let obstacleLeft = 500;
    const randomHeight = Math.random() * 60;

    const obstacleBottom = randomHeight;
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = `${obstacleLeft}px`;
    obstacle.style.bottom = `${obstacleBottom}px`;

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = `${obstacleLeft}px`;

      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
      }

      if (
        obstacleLeft > 200 && obstacleLeft < 200 && birdLeft === 220
        || birdBottom === 0) {
        gameOver();
      }
    }
    let timerId = setInterval(moveObstacle, 20);
    if (!isGameOver) setTimeout(generateObstacle, 3000);
  }
  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    console.log('game OVER!!!')
    isGameOver = true;
    document.removeEventListener('keyup', control);
  }
});