// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// console.log('Hello world');
// const test = [1, 2, 7, 'error'];
// const getMaxAdnMin = arr =>
//     arr
//         .filter(val => val !== 'error')
//         .reduce(
//             (acc, val2) => {
//                 console.log(acc.max);
//                 if (val2 < acc.min) acc.min = val2;
//                 if (val2 > acc.max) acc.max = val2;
//                 return acc;
//             },
//             { max: arr[0], min: arr[0] }
//         );
// const minOfMyArray = getMaxAdnMin(test);
// console.log(minOfMyArray.max - minOfMyArray.min);

// CHALLENGE #1

const printForecast = arr =>
    arr.reduce(
        (str, temp, index) => str + `... ${temp}°C in ${index + 1} days`,
        ''
    );
console.log(printForecast([17, 21, 23]) + '...');
console.log(printForecast([12, 5, -5, 0, 4]));
