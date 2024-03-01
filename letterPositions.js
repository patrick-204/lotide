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

// letterPositions will return an object containing all the indices
// (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  const results = {};
  
  for (const index in sentence) {
    let char = sentence[index];

    if (char !== ' ') {

      if (!results[char]) {
        results[char] = [];
      }

      results[char].push(Number(index));

    }
  }
  console.log(results);
  return results;
};

const sentence = "hello";

const result = letterPositions(sentence);

// Test code
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['o'], [4]);
assertArraysEqual(result['e'], [1]);

