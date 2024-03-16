const eqArrays = require('./eqArrays');

// My own assert function for arrays
const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: Array 1 !== array 2`);
  } else if (eqArrays(arr1, arr2)) {
    console.log(`👍👍👍 Assertion Passed: Array 1 === Array 2`);
  }
};

module.exports = assertArraysEqual;
