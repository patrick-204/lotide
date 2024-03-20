// findKeyByValue takes in an object and a value. It scans the object and returns
// the first key which contains the given value. If no key with that given value is found,
// then it should return undefined
const findKeyByValue = function(obj, val) {
  // let value = '';
  let objectKeys = Object.keys(obj);

  for (const key of objectKeys) {
    if (obj[key] === val) {
      return (key);
    }
  }
};

module.exports = findKeyByValue;
