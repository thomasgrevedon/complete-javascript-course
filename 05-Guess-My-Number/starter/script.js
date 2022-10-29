'use strict';
// ALGORITHM:
// set random number
// get the input and do things on it and update score.
// modify background
// reset button

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let found;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!found) {
    if (!guess) displayMessage('🛑 No number filled in');
    else if (guess > randomNumber && guess !== randomNumber) {
      displayMessage('Too high!');
      if (score > 0) document.querySelector('.score').textContent = --score;
    } else if (guess < randomNumber && guess !== randomNumber) {
      displayMessage('Too low');
      if (score > 0) document.querySelector('.score').textContent = --score;
    } else if (guess === randomNumber) {
      displayMessage('That the right number');
      document.querySelector('body').style.backgroundColor = '#60b347';
      found = true;
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.number').style.width = '20rem';
    }
    if (score === 0) {
      displayMessage('you lost');
      document.querySelector('body').style.backgroundColor = '#b34747';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing');
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  found = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
