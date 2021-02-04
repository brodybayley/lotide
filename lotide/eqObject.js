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
  console.log(object1Keys);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values of object1Keys) {
    console.log(object1[values])
    console.log(object1Keys[values])
    if (Array.isArray(object1Keys[values]) && Array.isArray(object2Keys[values])) {
      if (!eqArrays(object1Keys, object2Keys))
        return false;
    } else
      return true;
  }

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba));

