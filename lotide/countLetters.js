const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};


const countLetters = function (string) {
  let finalObject = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (finalObject[letter]) {
        finalObject[letter] += 1;
      } else {
        finalObject[letter] = 1;
      }
    }
  }
  return finalObject;
}

const testStr1 = "aaabbb cccdddd";

result1 = countLetters(testStr1);

assertEqual(result1['a'], 3);
assertEqual(result1['b'], 3);
assertEqual(result1['c'], 3);
assertEqual(result1['d'], 4);