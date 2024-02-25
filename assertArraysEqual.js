// My own assert function for arrays
const assertArraysEqual = function(eqArrays) {
  if (!eqArrays) {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: Array 1 !== array 2`);
  } else if (eqArrays) {
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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, "3"]));
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]));
