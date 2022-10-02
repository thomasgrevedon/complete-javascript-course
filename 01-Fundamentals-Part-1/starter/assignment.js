// let country = 'France';
// let continent = 'Europe';
// let population = 67000000;
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(country, population);
// const sarahAge = 20;
// const jonasAge = 18;
// const averageAge = Math.
// const isSarahAgeAbove18 = sarahAge > 18;

const calculateBMI = (mass, height) => mass / height ** 2;

// challenge
// #1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let hieghtJohn = 1.95;

let BMIOfMark = calculateBMI(massMark, heightMark);
let BMIOfJohon = calculateBMI(massJohn, hieghtJohn);

let isMarkBMIhigherThanJohn = BMIOfMark > BMIOfJohon;
console.log(BMIOfMark, BMIOfJohon);
console.log(isMarkBMIhigherThanJohn);
//#2
massMark = 95;
heightMark = 1.88;
massJohn = 15;
hieghtJohn = 1.76;

BMIOfMark = calculateBMI(massMark, heightMark);
BMIOfJohon = calculateBMI(massJohn, hieghtJohn);
console.log(BMIOfMark, BMIOfJohon);
isMarkBMIhigherThanJohn = BMIOfMark > BMIOfJohon;
console.log(isMarkBMIhigherThanJohn);

// Coding Challenge 2
if (isMarkBMIhigherThanJohn)
    console.log(
        `Mark's BMI ${BMIOfMark.toFixed(2)} is higher than John's ${BMIOfJohon}`
    );
else console.log(`John's BMI ${BMIOfJohon} is higher than Mark ${BMIOfMark}`);
// test
// test

// function helpers
const calculateAverage = (array) =>
    array.length && array.reduce((acc, score) => acc + score, 0) / array.length;

const checkTheWinnerWithNoLimit = (
    dolphinsAverageScore,
    koalasAveragescore
) => {
    if (dolphinsAverageScore > koalasAveragescore)
        console.log(
            `Dolphins have won with the avrage of ${dolphinsAverageScore} over ${koalasAveragescore} 🏆`
        );
    else if (koalasAveragescore > dolphinsAverageScore)
        console.log(
            `Koalas have won with the average of ${koalasAveragescore} over ${dolphinsAverageScore}`
        );
    else
        console.log(
            `It is a draw with the scor of Doplohins equal ${dolphinsAverageScore} and Koals: ${koalasAveragescore}`
        );
};

const checkTheWinnerWithLimit100 = (
    dolphinsAverageScore,
    koalasAveragescore
) => {
    if (
        dolphinsAverageScore > koalasAveragescore &&
        dolphinsAverageScore >= 100
    )
        console.log(
            `Dolphins have won with the avrage of ${dolphinsAverageScore} over ${koalasAveragescore}`
        );
    else if (
        koalasAveragescore > dolphinsAverageScore &&
        koalasAveragescore >= 100
    )
        console.log(
            `Koalas have won with the average of ${koalasAveragescore} over ${dolphinsAverageScore}`
        );
    else if (
        dolphinsAverageScore === koalasAveragescore &&
        dolphinsAverageScore >= 100 &&
        koalasAveragescore >= 100
    )
        console.log(
            `It is a draw with the scor of Doplohins equal ${dolphinsAverageScore} and Koals: ${koalasAveragescore}`
        );
    else console.log('No output for this gamme');
};

// CODING CHALLENG #3
let dolphinsScores = [96, 108, 89];
let averageDolphinsScore = calculateAverage(dolphinsScores);
console.log(averageDolphinsScore.toFixed(2));

let koalasScores = [88, 91, 110];
let averageKoalasScore = calculateAverage(koalasScores);
console.log(averageKoalasScore.toFixed(2));

checkTheWinnerWithNoLimit(averageDolphinsScore, averageKoalasScore);

// Bonus 1
dolphinsScores = [97, 112, 101];
averageDolphinsScore = calculateAverage(dolphinsScores);
console.log(averageDolphinsScore.toFixed(2));

koalasScores = [109, 95, 123];
averageKoalasScore = calculateAverage(koalasScores);
console.log(averageKoalasScore.toFixed(2));

checkTheWinnerWithLimit100(averageDolphinsScore, averageKoalasScore);

// Bonus 2
dolphinsScores = [97, 112, 101];
averageDolphinsScore = calculateAverage(dolphinsScores);
console.log(averageDolphinsScore.toFixed(2));

koalasScores = [109, 95, 106];
averageKoalasScore = calculateAverage(koalasScores);
console.log(averageKoalasScore.toFixed(2));

checkTheWinnerWithLimit100(averageDolphinsScore, averageKoalasScore);
