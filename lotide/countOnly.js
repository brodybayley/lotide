const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const countOnly = function (allItems, itemsToCount) {
  const results = {}
  let itemsToCountArray = [];
  for (const name in itemsToCount) {
    if (itemsToCount[name]) {
      itemsToCountArray.push(name);
    }
  }

  for (const item of allItems) {
    if (itemsToCountArray.includes(item)) {
      if (!results[item]) {
        results[item] = 1
      } else {
        results[item] = results[item] + 1;
      }
    }
  }
  return results;
}


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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
