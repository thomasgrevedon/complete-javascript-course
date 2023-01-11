'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const addMovement = (movements, sort = false) => {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${movement}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const balanceToDisplay = acc => {
  acc.balance = acc.movements.reduce((acc, mvt) => acc + mvt, 0);
  labelBalance.innerHTML = `${acc.balance}€`;
};

const calcDisplaySummary = (mvts, interestRate) => {
  const sumIn = mvts.filter(mvt => mvt > 0).reduce((acc, mvt) => acc + mvt, 0);
  labelSumIn.textContent = `${sumIn}€`;
  const sumOut = mvts.filter(mvt => mvt < 0).reduce((acc, mvt) => acc + mvt, 0);
  labelSumOut.textContent = `${Math.abs(sumOut)}€`;
  const sumInterest = mvts
    .filter(mvt => mvt > 0)
    .reduce(
      (acc, mvt) =>
        (mvt * (interestRate / 100) > 1 &&
          (acc += mvt * (interestRate / 100))) ||
        acc,
      0
    );
  labelSumInterest.textContent = `${sumInterest}€`;
};

const constructShortNames = accounts => {
  accounts.forEach(acc => {
    const fullName = acc.owner;
    acc.username = fullName
      .split(' ')
      .map(name => name[0].toLowerCase())
      .join('');
  });
};
constructShortNames(accounts);

const displayWebUI = acc => {
  addMovement(acc.movements);
  balanceToDisplay(acc);
  calcDisplaySummary(acc.movements, acc.interestRate);
};

let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    displayWebUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAccount &&
    amount <= currentAccount.balance &&
    receiverAccount.username !== currentAccount.username
  ) {
    receiverAccount.movements.push(amount);
    currentAccount.movements.push(-amount);
    displayWebUI(currentAccount);
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const accToDelete = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(accToDelete, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);
  const checkDeposit = currentAccount.movements.some(
    mvt => mvt > (loan * 10) / 100
  );
  if (checkDeposit) {
    currentAccount.movements.push(loan);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
  displayWebUI(currentAccount);
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  addMovement(currentAccount.movements, (sorted = !sorted));
});

/////////////////////////////////////////////////

// EXERCICES AND CHALLENGE

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉


// Input datas for first challenge:
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaShallow = dogsJulia.slice(1, -2);
  const bothArray = dogsJuliaShallow.concat(dogsKate);
  bothArray.forEach((dog, i) => {
    console.log(
      `${
        dog >= 3
          ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
          : `Dog number ${i + 1} is still a puppy 🐶`
      }`
    );
  });
};

//checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/

// chalenge 2
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
/*
const calcAverageHumanAge = arrAges =>
  arrAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce(
      (acc, humanAge, i, arr) =>
        //i === arr.length - 1 ? (acc + humanAge) / arr.length : acc + humanAge,
        (acc += humanAge / arr.length),
      0
    );
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
console.log(
  [16, 6, 10, 5, 6, 1, 4]
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
);
*/


///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
]
*/
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
]
//1.
dogs.forEach((dog) => dog.recommendedFoodPortion = dog.weight ** 0.75 * 28)
//console.log(dogs);

//2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))
//console.log(sarahDog.curFood > (sarahDog.recommendedFoodPortion * 0.90) && sarahDog.curFood < (sarahDog.recommendedFoodPortion * 1.10) ? 'Not eating too much' : 'Eating too much');

//3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood >  (dog.recommendedFoodPortion * 1.10));
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < (dog.recommendedFoodPortion * 0.90));
//console.log(dogs);
//console.log(ownersEatTooMuch);
//console.log(ownersEatTooLittle);

//4.
//console.log(`${ownersEatTooMuch.flatMap(dog => dog.owners).join(' and ')}'s dogs eat too much!`);
//console.log(`${ownersEatTooLittle.flatMap(dog => dog.owners).join(' and ')}'s dogs eat too little!`);

//5
//console.log(dogs.some(dog => dog.curFood === dog.recommendedFoodPortion));

//6
//console.log(dogs.some(dog => dog.curFood > (dog.recommendedFoodPortion * 0.90) && dog.curFood < (dog.recommendedFoodPortion * 1.10)));

//7
//const dogWithOkayAmountOfFood = dogs.filter(dog => dog.curFood > (dog.recommendedFoodPortion * 0.90) && dog.curFood < (dog.recommendedFoodPortion * 1.10));
//console.log(dogWithOkayAmountOfFood);

//8
const copyArray = dogs.slice().sort((dogA, dogB) => dogA.recommendedFoodPortion - dogB.recommendedFoodPortion );
console.log(copyArray);
//console.log(dogs);
*/