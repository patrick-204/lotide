// Create a function tail which returns every element except the head (first element) of the array.
const tail = function(arr) {
  const elements = arr.slice(1);
  return elements;
};

module.exports = tail;
