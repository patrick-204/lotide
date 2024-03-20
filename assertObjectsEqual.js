const eqObjects = require('./eqObjects');

// My own assert function for objects
// takes in two objects and console.logs an appropriate message to the console
const assertObjectsEqual = function(obj1, obj2) {
  // Import the library util llibrary so that can inspect objects
  const inspect = require('util').inspect;
  if (!eqObjects(obj1, obj2)) {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;
