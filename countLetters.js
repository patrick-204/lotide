// My own assert function
// If values match, print Assertion Passed: [actual] === [expected]
// Otherwise, Assertion Failed: [actual] !== [expected]
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤦‍♂️🤦‍♂️🤦‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const sentence = "lighthouse in the house";

const result = countLetters(sentence);

// Test code
assertEqual(result['l'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);