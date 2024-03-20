// countLetters() should take in a sentence (as a string) and then
// return an object that contains the count of each of the letters
// in that sentence.
const countLetters = function(string) {
  let output = {};
  
  for (const letter of string) {
    if (letter !== ' ') {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;
