const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  scary: "Scary Movie"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' from 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("returns undefined from 'That '70s show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s show"), undefined);
  });
  it("returns 'scary' from 'Scary Movie'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'Scary Movie'), 'scary');
  });
});


// assertEqual(findKeyByValue(bestTVShowsByGenre, "Scary Movie"), "drama");