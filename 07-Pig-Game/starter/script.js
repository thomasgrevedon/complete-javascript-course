'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentPlayer = 0;
let currentScore = 0;
let currentScoreToImpact = currentScore0;
let gameEnd = false;
let scorePlayer0 = 0;
let scorePlayer1 = 0;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const changePlayer = () => {
  currentScore = 0;
  currentScoreToImpact.textContent = currentScore;
  if (currentPlayer === 0 && scorePlayer0 > 100) {
    player0.classList.add('player--winner');
    gameEnd = true;
  } else if (currentPlayer === 1 && scorePlayer1 > 100) {
    player1.classList.add('player--winner');
    gameEnd = true;
  } else {
    currentScoreToImpact = currentPlayer === 0 ? currentScore1 : currentScore0;
    if (currentPlayer === 0) {
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }
};

rollDiceBtn.addEventListener('click', () => {
  if (!gameEnd) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${randomNumber}.png`;
    dice.classList.remove('hidden');

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      currentScoreToImpact.textContent = currentScore;
    } else {
      changePlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  currentPlayer === 0
    ? (scorePlayer0 += currentScore)
    : (scorePlayer1 += currentScore);
  currentPlayer === 0
    ? (score0.textContent = scorePlayer0)
    : (score1.textContent = scorePlayer1);
  changePlayer();
});

resetBtn.addEventListener('click', () => {
  currentScore = 0;
  currentScoreToImpact = currentScore0;
  gameEnd = false;
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  if (player0.classList.contains('player--winner'))
    player0.classList.remove('player--winner');
  if (player1.classList.contains('player--winner'))
    player1.classList.remove('player--winner');
  score0.textContent = 0;
  score1.textContent = 0;
  if (currentPlayer === 1) changePlayer();
  currentPlayer = 0;
});
