const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
const words = tail(["🪀🪀", "Lighthouse", "Labs"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words[1], "Labs");