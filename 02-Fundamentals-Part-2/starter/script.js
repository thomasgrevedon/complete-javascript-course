'use strict';
//CODING CHALLENGE #1
// const calcAverage = (number1, number2, number3) =>
//     (number1 + number2 + number3) / 3;

// const checkWinner = (avgDolphins, avgKoalas) =>
//     avgDolphins / 2 >= avgKoalas
//         ? console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
//         : avgKoalas / 2 >= avgDolphins
//         ? console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
//         : console.log('No winner');

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// checkWinner(avgDolphins, avgKoalas);

// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

// CODING CHALLENGE #2
// const calcTip = (billeValue) =>
//     billeValue >= 50 && billeValue <= 300
//         ? 0.15 * billeValue
//         : 0.2 * billeValue;
// console.log(calcTip(100));

// const total = [125, 555, 44];
// const tips = [
//     calcTip(total[0]),
//     calcTip(total[1]),
//     calcTip(total[total.length - 1]),
// ];
// console.log(tips);
// console.log(total.map((val, index) => val + tips[index]));

//Exercice on object
const jonas = {
    firstname: 'Jonas',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    calcAge: function () {
        return (this.age = 2037 - this.birthYear);
    },
    hasAdriverLicence: true,
    introduceJonas: function () {
        return `${this.firstname} is a ${this.calcAge()}-year old ${
            this.job
        }, and he ${
            this.hasAdriverLicence ? 'has' : ' has not'
        } a driver's licence and another age which is ${this.age2}`;
    },
};

console.log(
    `${jonas.firstname} has ${jonas['friends'].length} and his best friend is ${jonas.friends[0]}`
);

console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.introduceJonas());
jonas.age2 = jonas.calcAge();
console.log(jonas.introduceJonas());
