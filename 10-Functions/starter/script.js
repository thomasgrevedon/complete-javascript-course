'use strict';
const greet = greeting => name => console.log(`${greeting} ${name}`);
greet('hey')('Thomas');
