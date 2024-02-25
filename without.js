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

// Implement without which will return a subset of a given array,
// removing unwanted elements.
const without = function(source, itemsToRemove) {
  let arrNotPresent = [];

  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      arrNotPresent.push(element);
    }
  }

  // console.log(arrNotPresent);
  return arrNotPresent;
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world", "no"]);
