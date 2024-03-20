// letterPositions will return an object containing all the indices
// (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  const results = {};
  
  for (const index in sentence) {
    let char = sentence[index];

    if (char !== ' ') {

      if (!results[char]) {
        results[char] = [];
      }

      results[char].push(Number(index));

    }
  }
  return results;
};

module.exports = letterPositions;


