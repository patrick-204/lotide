// Create a function flatten which will take in an array containing elements
// including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(arr) {
  let flat = [];
  
  for (const value of arr) {
    if (Array.isArray(value)) {
      // use recursion with the spread operator to call flatten function
      // until have single array. Spread operator splits the arr array into
      // multiple elements
      flat.push(...flatten(value));
    } else {
      flat.push(value);
    }
  }
  return flat;
};

module.exports = flatten;