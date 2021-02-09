const countOnly = require('../countOnly');
const assert = require('chai').assert;

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

describe("#countOnly", () => {
  it("returns 1 for 'Jason'", () => {
    const finalCount = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual((finalCount["Jason"]), 1);
  });
  it("returns undefined for 'Karima'", () => {
    const finalCount = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual((finalCount["Karima"]), undefined);
  });
  it("returns 2 for 'Fang'", () => {
    const finalCount = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual((finalCount["Fang"]), 2);
  });
  it("returns undefined for 'Agouhanna'", () => {
    const finalCount = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual((finalCount["Agouhanna"]), undefined);
  });
});
