// My own assert function for arrays
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: Array length 1 ${arr1.length} !== Array length 2 ${arr2.length}`);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: Array 1 element ${arr1[i]} !== Array 2 element ${arr2[i]}`);
    }
  }
  console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
