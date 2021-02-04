const words = ["ground", "control", "to", "major", "tom"];
const map = (array, callback) => {
  const returnArr = [];
  for (const item of array) {
    returnArr.push(callback(item));
  }
  return returnArr;
}

const result = map(words, word => word[0]);
console.log(result);

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

assertArraysEqual(map(words), ['g', 'c', 't', 'm', 't'])

// Useful testing consoles:

// console.log('array: ', array);
// console.log('callback: ', callback);

// console.log('item BEFORE: ', item);
// console.log('item AFTER: ', callback(item));
// console.log('---');