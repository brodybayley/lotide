const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns [2, 3] for 'hello'", () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
});
