const without = function (source, itemsToRemove) {
  let finalArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      finalArray.push(source[i])
    }
  }
  return finalArray;
};

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, "2", 3]))
console.log(without([7, 10, 12], [1, 10, 13]))


