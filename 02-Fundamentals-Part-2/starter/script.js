'use strict';
//CODING CHALLENGE #1
const calcAverage = (number1, number2, number3) =>
    (number1 + number2 + number3) / 3;

const checkWinner = (avgDolphins, avgKoalas) =>
    avgDolphins / 2 >= avgKoalas
        ? console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
        : avgKoalas / 2 >= avgDolphins
        ? console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
        : console.log('No winner');

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
