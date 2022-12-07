'use strict';
/*
//Exercice on functions return another functions
const greet = greeting => name => console.log(`${greeting} ${name}`);
//greet('hey')('Thomas');

const addVAT = value => () => value + value * 0.23;
//console.log(addVAT(100)());

const addVAT2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addVAT2.bind(null, 0.23)().bind(null, 100)());
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', () => (header.style.color = 'blue'));
})();
