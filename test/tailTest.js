const assert = require('chai').assert;
const tail = require('../tail');
const words = ["🪀🪀", "Lighthouse", "Labs"];

describe("#Tail", () => {

  it("returns 2 for length of array", () => {
    assert.deepEqual(tail(words).length, 2);
  });

  it("returns 'Lighthouse'", () => {
    assert.deepEqual(tail(words)[0], "Lighthouse");
  });

  it("returns 'Labs'", () => {
    assert.deepEqual(tail(words)[1], "Labs");
  });

  it("make sure the original array was not altered by the tail function", () => {
    const testWords = ["hello", "world", "lighthouse"];
    const originalLength = testWords.length;
    tail(testWords);
    assert.strictEqual(testWords.length, originalLength);
  });

});
