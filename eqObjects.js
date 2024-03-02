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

// eqObjects Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  let object1KeysArr = [];
  let object2KeysArr = [];

  for (const key of object1Keys) {
    object1KeysArr.push(key);
  }

  for (const key of object2Keys) {
    object2KeysArr.push(key);
  }

  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  }

  for (const key of object1KeysArr) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } 
    }

    if (object1[key] === object2[key] && !Array.isArray(object1[key])) {
      return true;
    }
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
let result1 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

// Test code
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
assertEqual(result1, true);