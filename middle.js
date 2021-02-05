const assertArraysEqual = function(array1, array2) {
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


const middle = function(array) {
  let finalArray = [];
  if (array.length <= 2) {
    finalArray;
  }
  if (array.length > 2 && array.length % 2 === 0) {
    finalArray.push(array.length / 2);
    finalArray.push(array.length / 2 + 1);
  } else if (array.length > 2 && array.length % 1 === 0) {
    finalArray.push(Math.ceil(array.length / 2));
  }
  return finalArray;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

