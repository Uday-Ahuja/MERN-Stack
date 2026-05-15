import math from './math.js';

// test values
const a = 10;
const b = 5;
const zero = 0;

// addition
console.log('Add:', math.add(a, b));

// subtraction
console.log('Subtract:', math.subtract(a, b));

// multiplication
console.log('Multiply:', math.multiply(a, b));

// division
console.log('Divide:', math.divide(a, b));

// division by zero (edge case)
console.log('Divide by zero:', math.divide(a, zero));