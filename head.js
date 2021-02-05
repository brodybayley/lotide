const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

const head = function(array) {
  let firstItem = array[0];
  return firstItem;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");