'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
// Exercice on arrays
const nested = [2, 4, [5, 6]];
const [first, , arr] = nested;
console.log(first, arr);

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 0.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    players.forEach(p => console.log(p));
    console.log(players.length);
  },
};

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
//1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

//6
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

//7
console.log(
  (team1 < team2 && 'team 1 will win') || (team2 < team1 && 'team2 will win')
);
*/

//CHALLENGE 2
/*
//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
let total = 0;
for (const oddValue of Object.values(game.odds)) {
  total += oddValue;
}
console.log(total / Object.values(game.odds).length);

console.log(
  Object.values(game.odds).reduce((acc, odd) => {
    return acc + odd;
  }, 0) / Object.values(game.odds).length
);

//3
for (const team of Object.keys(game.odds)) {
  (game.team &&
    console.log(`Odd of victory ${game[team]}: ${game.odds[team]} `)) ||
    console.log(`Odd of draw: ${game.odds[team]} `);
}

// BONUS
const playerScored = game.scored.reduce((acc, player) => {
  acc[player] ? acc[player]++ : (acc[player] = 1);
  // acc[player] ?? acc[player] = 0;
  // Object.keys(acc).includes(player) ? (acc[player] += 1) : (acc[player] = 0);
  return acc;
}, {});
console.log(playerScored);
*/
/*
const quizz = new Map([
  ['question', 'What is the best prorgramming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [true, 'That correct!! '],
  [false, 'Not correct'],
]);
for (const [key, val] of quizz) {
  if (typeof key === 'number') console.log(`${key}: ${val}`);
}
const ans = prompt('What is the best programming language');
console.log(quizz.get(Number(ans) === 3));
*/
/*
// CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An event happened every ${90 / [...gameEvents.keys()].length} minutes`
);

//4
for (const [key, val] of gameEvents) {
  if (key <= 45) console.log(`[FIRST HALF]: ${key}: ${val}`);
  else console.log(`[SECOND HALF] ${key}: ${val}`);
}
*/

// TEST DATAs
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

//CHALLLENGE 4
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', () => {
  const msg = document.querySelector('textarea').value;
  const wordsArray = msg.split(`\n`).map(word => {
    const splittedWord = word.trim().split('_');
    splittedWord[0] = splittedWord[0].toLowerCase();
    splittedWord[1] =
      splittedWord[1].slice(0, 1).toUpperCase() +
      splittedWord[1].slice(1).toLocaleLowerCase();
    return splittedWord.join('');
  });
  wordsArray.forEach((word, index) => {
    let toLog = word;
    for (let i = 0; i < 20 - word.length; i++) {
      toLog += ' ';
    }
    for (let i = -1; i < index; i++) {
      toLog += '\uD83D\uDC04';
    }
    console.log(toLog);
  });
});
*/

/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

// CHALLENGE 4 after gettting the correction
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', () => {
  const msg = document.querySelector('textarea').value;
  const rows = msg.split(`\n`);
  for (const [i, row] of rows.entries()) {
    let [first, second] = row.trim().toLowerCase().split('_');
    let word = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${word.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsRow = flights.split('+');
flightsRow.forEach(flightRow => {
  const [status, from, to, time] = flightRow.split(';');
  console.log(
    `${status.startsWith('_Delayed') ? 'D' : ' '} ${status.replaceAll(
      '_',
      ' '
    )} from ${from.slice(0, 3).toUpperCase()} to ${to
      .slice(0, 3)
      .toUpperCase()} ${time.replace(':', 'h')}`.padStart(45, ' ')
  );
});
*/
