const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (results.hasOwnProperty(string[i])) {
        results[string[i]].push(i);
      } else if (string[i]) {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};

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

assertArraysEqual(letterPositions('hello').l, [2, 3]);