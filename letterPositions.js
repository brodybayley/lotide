const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = (string) => {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (Object.prototype.hasOwnProperty.call(results, string[i])) {
        results[string[i]].push(i);
      } else if (string[i]) {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};


assertArraysEqual(letterPositions('hello').l, [2, 3]);