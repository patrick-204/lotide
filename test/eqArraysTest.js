const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should FAIL