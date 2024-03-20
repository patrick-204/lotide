# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @patrick-204/lotide`

**Require it:**

`const _ = require('@patrick-204/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`
`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.middle([1, 2, 3, 4 , 5]) // => [3]`
`const results = _.assertArraysEqual([1, 2, 3], [1, 2, 3, 4]) // => 👍👍👍 Assertion Passed: Array 1 === Array 2`
`const results = _.assertEqual(1, 1) // => 👍👍👍 Assertion Passed: ${actual} === ${expected}`
`const results = _.assertObjectsEqual({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 2],
  key5: 'value5',
}, {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: [1, 2],
  key5: 'value5',
}) // pass // => 👍👍👍 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`
`const results = _.countLetters("light") // => { l: 1, i: 1, g: 1, h: 1, t: 1 }`
`const results = _.countOnly([
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }) // => { Fang: 2, Jason: 1 }`
`const results = _.eqArrays([1, 2, 3], [1, 2, 3]) // => true`
`const results = _.eqObjects({ color: "red", size: "medium" } , { size: "medium", color: "red" }) // => true`
`const results = _.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"`
`const results = _.findKeyByValue({
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}, "The Wire") // => "drama"`
`const results = _.letterPositions("hello") // => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }`
`const results = _.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0) // => [ 1, 2, 5, 7, 2 ]`
`const results = _.flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]`
`const results = _.map(["ground", "control", "to", "major", "tom"], word => word[0]) // => ['g', 'c', 't', 'm', 't']`
`const results = _.without(["hello", "world", "lighthouse"], ["lighthouse"]) // => ["hello", "world", "lighthouse"]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element from the array received as an argument.
* `tail(...)`: returns every element except the first from the array received as an argument.
* `middle(...)`: returns the middle element(s) except the first from the array received as an argument.
* `assertArraysEqual(...)`: receives 2 arrays as arguments and returns assertion passed/failed, depending on if they are an exact match.
* `assertEqual(...)`: receives 2 arguments and returns assertion passed/failed, depending on if they are an exact match - does not work for arrays.
* `assertObjectsEqual(...)`: receives 2 objects as arguments and returns assertion passed/failed, depending on if they are an exact match.
* `countLetters(...)`: receives a sentence (as a string) as an argument and then returns an object that contains the count of each of the letters in that sentence.
* `countOnly(...)`: receives an array and an object as arguments. It will return an object containing counts of everything that the input object listed.
* `eqArrays(...)`: receives 2 arrays as arguments and returnstrue or false, based on a perfect match.
* `eqObjects(...)`: receives 2 objects as arguments and returns true if both objects have identical keys with identical values. Otherwise, returns false.
* `findKey(...)`: receives an object and a callback as arguments. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(...)`: receives an object and a value as arguments. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `letterPositions(...)`: receives a string as an argument. Returns an object containing all the indices(zero-based positions) in the string where each character is found.
* `takeUntil(...)`: receives 2 args: array to work with; callback function. The function will return a slice of elements from the start of the array. It will keep returning until it receives a truthy value. The callback will only take in one arg - the item in the array.
* `flatten(...)`: receives an array containing elements including nested arrays of elements as an argument - returns a "flattened" version of the array.
* `map(...)`: Receives 2 arguments: an array to map; a callback function. Creates a new array populated with the results of calling a provided function on every element in the calling array.
* `without(...)`: Receives 2 arguments: an array; items to remove from the array. Returns a subset of a given array, removing unwanted elements.
* `assertArraysEqualTest(...)`: Test module for the assertArraysEqual function. 
* `assertEqualTest(...)`: Test module for the assertEqual function. 
* `assertObjectsEqualTest(...)`: Test module for the assertObjectsEqual function. 
* `countLettersTest(...)`: Test module for the countLetters function. 
* `countOnlyTest(...)`: Test module for the countOnly function. 
* `eqArraysTest(...)`: Test module for the eqArrays function. 
* `eqObjectsTest(...)`: Test module for the eqObjects function. 
* `findKeyByValueTest(...)`: Test module for the findKeyByValue function. 
* `findKeyTest(...)`: Test module for the findKey function. 
* `flattenTest(...)`: Test module for the flatten function. 
* `headTest(...)`: Test module for the head function. 
* `letterPositionsTest(...)`: Test module for the letterPositions function. 
* `mapTest(...)`: Test module for the map function. 
* `tailTest(...)`: Test module for the tail function. 
* `takeUntilTest(...)`: Test module for the takeUntil function. 
* `withoutTest(...)`: Test module for the without function. 




