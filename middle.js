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

// My own assert function for arrays
const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: Array 1 !== array 2`);
  } else if (eqArrays(arr1, arr2)) {
    console.log(`👍👍👍 Assertion Passed: Array 1 === Array 2`);
  }
};

// Implement middle which will take in an array and return the
// middle-most element(s) of the given array
const middle = function(arr) {
  let mid = [];
  let middleLeft = 0;
  let middleRight = 0;
  let middleCentre = 0;

  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 0) {
    middleLeft = arr[(arr.length / 2) - 1];
    mid.push(middleLeft);
    middleRight = arr[(arr.length / 2)];
    mid.push(middleRight);
    return mid;
  } else {
    middleCentre = arr[(Math.floor(arr.length / 2))];
    mid.push(middleCentre);
    return mid;
  }

};

// Test code
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
