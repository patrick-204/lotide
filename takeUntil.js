// takeUntil() will take in 2 args: array to work with; callback function
// The function will return a slice of elements from the start of the array
// It will keep returning until it receieves a truthy value
// The callback should only take in one arg - the item in the array
const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;
