'use strict';

const btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtnModal = document.querySelector('.close-modal');

const hiddenModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

overlay.addEventListener('click', hiddenModal);
closeBtnModal.addEventListener('click', hiddenModal);
