const monster = document.getElementById('monster');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 30;
let gameInterval;
let moveInterval;

function moveMonster() {
  const gameWidth = window.innerWidth - 100;
  const gameHeight = window.innerHeight - 100;
  const x = Math.random() * gameWidth;
  const y = Math.random() * gameHeight;
  monster.style.left = x + 'px';
  monster.style.top = y + 'px';
}

function startGame() {
  moveMonster();
  moveInterval = setInterval(moveMonster, 1000);

  gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = 'Temps : ' + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(moveInterval);
      monster.style.display = 'none';
      alert('Temps écoulé ! Votre score : ' + score);
    }
  }, 1000);
}

monster.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = 'Score : ' + score;
  moveMonster();
});

window.onload = startGame;
