let args = process.argv;
const newArray = args.slice(2);
let reverseString = '';
//outer for statement to access array
for (let i = 0; i < newArray.length; i++) {
  //inner for statement to access each element of the array
  for (let j = newArray[i].length - 1; j >= 0; j--) {
    reverseString += newArray[i][j];
  }
  reverseString += '\n';
}

console.log(reverseString);