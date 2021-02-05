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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
