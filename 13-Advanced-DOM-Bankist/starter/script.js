'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const navBarLinks = document.querySelector('.nav__links');

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

// const learnMore = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// learnMore.addEventListener('click', () => {
//   //const section1Pos = section1.getBoundingClientRect();
//   //console.log(e.target.getBoundingClientRect());
//   // window.scrollTo({
//   //   left: section1Pos.left + window.scrollX,
//   //   top: section1Pos.top + window.scrollY,
//   //   behavior: 'smooth',
//   // });
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

navBarLinks.addEventListener('click', e => {
  e.preventDefault();
  const el = e.target;
  const section = el.getAttribute('href');
  if (section)
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
});

const tabContainer = document.querySelector('.operations__tab-container');
const operationsTabs = document.querySelectorAll('.operations__tab');
const opContents = document.querySelectorAll('.operations__content');

// event listener on buttons et find closest parent
// not button then return
// remove all active on button and content on text area
// add active class on clicked button and text area

tabContainer.addEventListener('mouseover', e => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  operationsTabs.forEach(opTab =>
    opTab.classList.remove('operations__tab--active')
  );
  opContents.forEach(opContent =>
    opContent.classList.remove('operations__content--active')
  );

  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});