const letterPositions = function (string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] != ' ') {
      if (results.hasOwnProperty(string[i])) {
        results[string[i]] + [i];
      } else if (string[i]) {
        results[string[i]] = [i];
      }
    }
  }
  console.log(results)
  return results;
};

const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`❌❌❌ false`);
    return;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`❌❌❌ false`);
      return;
    }
  }
  console.log(`✅✅✅ true`);
};


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

let testStr1 = 'hello';

let result1 = letterPositions(testStr1);

assertArraysEqual(result1, { h: [0], e: [1], l: [2, 3], o: [4] });