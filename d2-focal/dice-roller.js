const diceNumber = process.argv;
const spliceArray = diceNumber.splice(2);

const randomNumbers = function (spliceArray) {
  let finalNumbers = [];
  for (let i = 0; i < spliceArray; i++) {
    const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    finalNumbers.push(randomNumber);
  }
  return finalNumbers.join();
}

const diceRolls = randomNumbers(spliceArray);
console.log(`Rolled ${spliceArray} dice: ${diceRolls}`);

