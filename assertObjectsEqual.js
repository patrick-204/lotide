// // Implement a function eqArrays which takes in two arrays and returns
// // true or false, based on a perfect match.
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

// My own assert function for objects
// takes in two objects and console.logs an appropriate message to the console
const assertObjectsEqual = function(obj1, obj2) {
  // Import the library util llibrary so that can inspect objects
  const inspect = require('util').inspect;
  if (!eqObjects(obj1, obj2)) {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  } else if (eqObjects(obj1, obj2)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
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

  for (const key of object1Keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }

    if (object1[key] !== object2[key] && !Array.isArray(object1[key])) {
      return false;
    }
  }
  return true;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const anotherObj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 2],
  key5: 'value5',
};

// Test code
assertObjectsEqual(bestTVShowsByGenre, { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" }); // pass
assertObjectsEqual(bestTVShowsByGenre, { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "no" }); // fail
assertObjectsEqual(bestTVShowsByGenre, 1); // fail
assertObjectsEqual(anotherObj, {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 2],
  key5: 'value5',
}); // pass
assertObjectsEqual(anotherObj, {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 3],
  key5: 'value5',
}); // fail