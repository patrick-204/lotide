// Implement without which will return a subset of a given array,
// removing unwanted elements.
const without = function(source, itemsToRemove) {
  let arrNotPresent = [];

  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      arrNotPresent.push(element);
    }
  }
  
  return arrNotPresent;
};

module.exports = without;

