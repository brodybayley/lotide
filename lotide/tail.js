const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (words) {
  const newArray = words.slice(1);
  return newArray;
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 3);
