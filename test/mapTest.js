const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// Test code
// arrray collection of words
const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);

const result2 = map(words, word => word[2]);

assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, ['o', 'n', undefined, 'j', 'm']);
