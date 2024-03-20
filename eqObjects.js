const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
