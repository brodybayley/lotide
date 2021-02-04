const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//worked with Elodie and Brody 
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values of object1Keys) {
    if (object1Keys[values] !== object2Keys[values]) {
    } return false;

  }
  return true;
}



const ab = { a: "1", b: "2" };
const ba = { b: "3", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ba, ab)); // => 