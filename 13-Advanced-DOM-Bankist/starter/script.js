'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('message');
message.classList.add('cookie-message');
message.innerHTML =
  "We use cookie to improve our quality <Button class='btn button-close-cookie'> Got it </Button>";

const headerElt = document.querySelector('.header');
headerElt.prepend(message);
document
  .querySelector('.button-close-cookie')
  .addEventListener('click', () => message.remove());

const learnMore = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

learnMore.addEventListener('click', () => {
  //const section1Pos = section1.getBoundingClientRect();
  //console.log(e.target.getBoundingClientRect());
  // window.scrollTo({
  //   left: section1Pos.left + window.scrollX,
  //   top: section1Pos.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
