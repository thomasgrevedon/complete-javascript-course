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
const calcTip = (billeValue) =>
    billeValue >= 50 && billeValue <= 300
        ? 0.15 * billeValue
        : 0.2 * billeValue;
console.log(calcTip(100));

const total = [125, 555, 44];
const tips = [
    calcTip(total[0]),
    calcTip(total[1]),
    calcTip(total[total.length - 1]),
];
console.log(tips);
console.log(total.map((val, index) => val + tips[index]));
