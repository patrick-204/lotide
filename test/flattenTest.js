const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const flatten = require('../flatten');

assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true); // => should PASS
assertEqual(eqArrays(flatten([1, [2, [3], 4]]), [1, 2, 3, 4]), true); // => should PASS
assertEqual(eqArrays(flatten([1, [2, [3], 4]]), [1, 2, 3, 5]), false); // => should FAIL