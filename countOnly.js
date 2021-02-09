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

module.exports = countOnly;
