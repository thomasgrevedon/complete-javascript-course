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
