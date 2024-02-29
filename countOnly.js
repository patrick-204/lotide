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

// countOnly will be given an array and an object. It will return an object
// containing counts of everything that the input object listed
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  //   for (const itemCount in itemsToCount) {
  //     if (itemName === itemCount) {
  //       if (itemsToCount[itemCount] === true)
  //       results[itemCount] += 1;
  //       }
  //   }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

// Test code
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);