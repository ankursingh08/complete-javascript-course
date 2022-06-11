'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number...🎉';
document.querySelector('.guess').value = 28;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// we start with this initial score
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackgroundColor('#60b347');
    setWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.guess').value = '';
  setScore(score);
  setWidth('15rem');
  setNumber('?');
  setBackgroundColor('#222');
  displayMessage('Start guessing...');
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
