'use strict';

// Selectors
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');

// init variables
let currentPlayer, currentScore, gameEnd, scores;

const init = () => {
  currentPlayer = 0;
  currentScore = 0;
  gameEnd = false;
  scores = [0, 0];
  player0.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add('hidden');
};

init();

const changePlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
};

rollDiceBtn.addEventListener('click', () => {
  if (!gameEnd) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomNumber}.png`;
    dice.classList.remove('hidden');

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (!gameEnd) {
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 20) {
      gameEnd = true;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      changePlayer();
    }
  }
});

resetBtn.addEventListener('click', init);
