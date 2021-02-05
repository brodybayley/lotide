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

//worked with Elodie and Brody
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  console.log(object1Keys);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values of object1Keys) {
    if (Array.isArray(object1Keys[values]) && Array.isArray(object2Keys[values])) {
      if (!eqArrays(object1Keys, object2Keys)) {
        return false;
      } else {
        if (object1Keys !== object2Keys) {
          return false;
        }
      }
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

