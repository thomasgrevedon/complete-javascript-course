'use strict';


///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const navBarLinks = document.querySelector('.nav__links');
const navEl = document.querySelector('.nav');
const section1El = document.querySelector('#section--1');
const header = document.querySelector('.header');

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

// NAV BAR FADED CLICKED LINKS
// create addeventlistner mouseover
// create addeventlistner mouseleave
// Create a function that will check if nav link and get it and then will get the parent (closest) and all children (nav_link with querryselectorall)
// call the function in the event listeners.
// on all nav link different than the clicked one, pass the opacity to 0.5 or 1
// Do the same on logo.

const navbar = document.querySelector('.nav__links');

const navEventFunction = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const clicked = e.target;
    const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
    const logo = clicked.closest('.nav').querySelector('.nav__logo');
    siblings.forEach(sibling => {
      if (sibling !== clicked) sibling.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navbar.addEventListener('mouseover', navEventFunction.bind(0.5));

navbar.addEventListener('mouseout', navEventFunction.bind(1));

// FIXED NAV BAR
// const initialSectionCoord = document.querySelector('#section--1').getBoundingClientRect().y;
// // console.log(initialSectionCoord);
// window.addEventListener('scroll', () => {
//   // console.log(document.querySelector('#section--1').getBoundingClientRect().y);
//   // console.log(document.querySelector('#section--1').getBoundingClientRect().top);
//   // console.log(window.scrollY);
//   const navigationBar = document.querySelector('.nav');
//   if(window.scrollY > initialSectionCoord) navigationBar.classList.add('sticky')
//   else navigationBar.classList.remove('sticky')
// });

// FIXED NAV BAR WITH OBSERVABLE
const navHeight = navEl.getBoundingClientRect().height;
const navCallBack = entries => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navEl.classList.add('sticky');
  } else {
    navEl.classList.remove('sticky');
    sections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  }
};

const observer = new IntersectionObserver(navCallBack, {
  root: null,
  threshold: 0,
  rootMargin: `-100px`,
});
observer.observe(header);

const sectionCallBack = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(sectionCallBack, {
  root: null,
  threshold: 0.15,
});
sections.forEach(section => {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

const loadCallback = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgages = document.querySelectorAll('img[data-src]');
const imgOberver = new IntersectionObserver(loadCallback, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgages.forEach(image => imgOberver.observe(image));

// SLIDES
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const dotsEl = document.querySelector('.dots');
let currSlide = 0;
const maxslide = slides.length;

slides.forEach((_, i) => {
  dotsEl.insertAdjacentHTML(
    'beforeend',
    `<button class="dots__dot" data-slide=${i}></button>`
  );
});

const updateDot = () => {
  document
    .querySelectorAll('.dots__dot')
    .forEach(el => el.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${currSlide}"]`)
    ?.classList.add('dots__dot--active');
};
updateDot();
dotsEl.addEventListener('click', e => {
  if (!e.target.classList.contains('dots__dot')) return;
  currSlide = e.target.dataset.slide;
  document
    .querySelectorAll('.dots__dot')
    .forEach(el => el.classList.remove('dots__dot--active'));
  e.target.classList.add('dots__dot--active');
  translateSlide();
});

const translateSlide = () => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};

translateSlide();

const sliderBtnRight = document.querySelector('.slider__btn--right');
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const nexSlide = () => {
  if (currSlide === maxslide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  updateDot();
  translateSlide();
};

const prevSlide = () => {
  if (currSlide === 0) {
    currSlide = maxslide - 1;
  } else {
    currSlide--;
  }
  updateDot();
  translateSlide();
};

sliderBtnRight.addEventListener('click', nexSlide);

sliderBtnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', e => {
  if (e.code === 'ArrowRight') nexSlide();
  else if (e.code === 'ArrowLeft') prevSlide();
  updateDot();
});