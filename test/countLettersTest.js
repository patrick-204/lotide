const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

const sentence = "lighthouse in the house";

const result = countLetters(sentence);

// Test code
assertEqual(result['l'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);