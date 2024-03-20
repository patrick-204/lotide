const assertObjectsEqual = require('../assertObjectsEqual');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const anotherObj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 2],
  key5: 'value5',
};

// Test code
assertObjectsEqual(bestTVShowsByGenre, { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" }); // pass
assertObjectsEqual(bestTVShowsByGenre, { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "no" }); // fail
assertObjectsEqual(bestTVShowsByGenre, 1); // fail
assertObjectsEqual(anotherObj, {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 2],
  key5: 'value5',
}); // pass
assertObjectsEqual(anotherObj, {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 3],
  key5: 'value5',
}); // fail