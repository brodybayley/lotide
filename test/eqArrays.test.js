const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#eqArrays", () => {
  it("return true if [1, 2, 3] equals [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("return false if [1, 2, 3] equals [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("return true if ['1', '2', '3'] equals ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("return true if ['1', '2', '3'] equals ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
});


// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);