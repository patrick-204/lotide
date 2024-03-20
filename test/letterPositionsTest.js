const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const sentence = "hello";
const result = letterPositions(sentence);

// Test code
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['o'], [4]);
assertArraysEqual(result['e'], [1]);