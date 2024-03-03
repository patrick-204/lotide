// My own assert function for arrays
const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: Array 1 !== array 2`);
  } else if (eqArrays(arr1, arr2)) {
    console.log(`👍👍👍 Assertion Passed: Array 1 === Array 2`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns
// true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// The map function will take in 2 args: an array to map; a callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// Test code

// arrray collection of words
const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);
console.log(result1);

const result2 = map(words, word => word[2]);
console.log(result2);


assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, ['o', 'n', undefined, 'j', 'm']);

