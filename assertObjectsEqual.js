//Worked with Brody Bayley;
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
  for (let values of actualKeys) {
    if (Array.isArray(actualKeys[values]) && Array.isArray(expectedKeys[values])) {
      if (!eqArrays(actualKeys, expectedKeys)) {
        console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
      } else {
        if (actualKeys !== expectedKeys) {
          console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
        }
      }
    }
  }
  console.log("✅✅✅ Assertion Passed: " + inspect(actual) + " === " + inspect(expected));
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);