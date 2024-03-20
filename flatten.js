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

// Create a function flatten which will take in an array containing elements
// including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(arr) {
  let flat = [];
  
  for (const value of arr) {
    if (Array.isArray(value)) {
      // use recursion with the spread operator to call flatten function
      // until have single array. Spread operator splits the arr array into
      // multiple elements
      flat.push(...flatten(value));
    } else {
      flat.push(value);
    }
  }
  return flat;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, [3], 4]])); // => [1, 2, 3, 4]