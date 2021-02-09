const countOnly = (allItems, itemsToCount) => {
  const results = {};
  let itemsToCountArray = [];
  for (const name in itemsToCount) {
    if (itemsToCount[name]) {
      itemsToCountArray.push(name);
    }
  }

  for (const item of allItems) {
    if (itemsToCountArray.includes(item)) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item] = results[item] + 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

module.exports = countOnly;
