const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

const length = input.length;

if (length === 4) {
  console.log(20);
} else if (length === 2) {
  console.log(input[0] + input[1]);
} else if (length === 3) {
  const sum1= input[0] * 10 + input[1]
  const sum2 = input[1] * 10 + input[2]
  console.log( sum1 > 10 ? sum2 + input[0] : sum1 + input[2]);
}
