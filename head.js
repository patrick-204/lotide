// Import asserEqual value
const assertEqual = require('./assertEqual');

// My own assert function
// If values match, print Assertion Passed: [actual] === [expected]
// Otherwise, Assertion Failed: [actual] !== [expected]
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// Create a function head which returns the first item in the array
// The head function should not return the first element as an array. It should simply return the element itself.
const head = function(arr) {
  // console.log(typeof(arr[0]));
  const element = arr[0];
  return element;
};

module.exports = head;