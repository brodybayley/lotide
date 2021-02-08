const middle = array => {
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


module.exports = middle