// Import the functions halfof from the lib.js module :

// import { halfof, multiply } from './lib.js';

// console.log("halfof: " +halfof(84));
// console.log("multiply: " +multiply(84, 2));

// import doSomething from './lib.js';

// doSomething();

import { flag, touch } from './validator.js';

console.log(flag); //false
touch(); // change to true
console.log(flag); // true
flag = false; // change to false
console.log(flag); // error
