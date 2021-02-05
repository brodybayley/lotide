const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(shows, value) {
  for (const genre in shows) {
    if (shows[genre] === value) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  scary: "Scary Movie"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Scary Movie"), "drama");