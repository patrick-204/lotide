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

// The function findKey takes in an object and a callback.
// It scans the object and returns the first key for which the callback
// returns a truthy value. If no key is found, then it returns undefined.
const findKey = function(obj, callback) {
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

// Example
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(result1);

// TEST CODE
assertEqual(result1, "noma");