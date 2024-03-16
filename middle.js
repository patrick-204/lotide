// Implement middle which will take in an array and return the
// middle-most element(s) of the given array
const middle = function(arr) {
  let mid = [];
  let middleLeft = 0;
  let middleRight = 0;
  let middleCentre = 0;

  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 0) {
    middleLeft = arr[(arr.length / 2) - 1];
    mid.push(middleLeft);
    middleRight = arr[(arr.length / 2)];
    mid.push(middleRight);
    return mid;
  } else {
    middleCentre = arr[(Math.floor(arr.length / 2))];
    mid.push(middleCentre);
    return mid;
  }

};

module.exports = middle;
