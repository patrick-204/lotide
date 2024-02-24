// My own assert function
// If values match, print Assertion Passed: [actual] === [expected]
// Otherwise, Assertion Failed: [actual] !== [expected]
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Lighthouse Labs", "Lighthouse Labs");