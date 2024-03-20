const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, x => x === ',');

assertArraysEqual(result1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(result2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);