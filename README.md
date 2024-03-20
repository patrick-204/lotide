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

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element from the array received as an argument
* `tail(...)`: returns every element except the first from the array received as an argument
* `middle(...)`: returns the middle element(s) except the first from the array received as an argument
* `assertArraysEqual(...)`: receives 2 arrays as arguments and returns assertion passed/failed, depending on if they are an exact match
* `assertEqual(...)`: receives 2 arguments and returns assertion passed/failed, depending on if they are an exact match - does not work for arrays
* `assertObjectsEqual(...)`: receives 2 objects as arguments and returns assertion passed/failed, depending on if they are an exact match
* `countLetters(...)`: receives a sentence (as a string) as an argument and then returns an object that contains the count of each of the letters in that sentence.
* `countOnly(...)`: receives an array and an object as arguments. It will return an object containing counts of everything that the input object listed
* `eqArrays(...)`: receives 2 arrays as arguments and returnstrue or false, based on a perfect match
* `eqObjects(...)`: receives 2 objects as arguments and returns true if both objects have identical keys with identical values. Otherwise, returns false
* `findKey(...)`: receives an object and a callback as arguments. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(...)`: receives an object and a value as arguments. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined
* `letterPositions(...)`: receives a string as an argument. Returns an object containing all the indices(zero-based positions) in the string where each character is found
* `takeUntil(...)`: receives 2 args: array to work with; callback function. The function will return a slice of elements from the start of the array. It will keep returning until it receieves a truthy value. The callback will only take in one arg - the item in the array
* `without(...)`: receives an array and a list of unwanted elements from that array as an argument. Returns a subset of a given array, removing unwanted elements
