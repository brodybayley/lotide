const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("return true if { a: '1', b: '2' } is equal to { b: '2', a: '1' }", () => {
    assert.deepEqual(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }), true);
  });
});

