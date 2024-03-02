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

// findKeyByValue takes in an object and a value. It scans the object and returns
// the first key which contains the given value. If no key with that given value is found,
// then it should return undefined
const findKeyByValue = function(obj, val) {
  let value = '';
  let objectKeys = Object.keys(obj);

  for (const index in obj) {
    if (obj[index] === val) {
      value = obj[index];
      for (const key of objectKeys) {
        if (obj[key] === value) {
          return (key);
        }
      }
    }
  }
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Test code
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

