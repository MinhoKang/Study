const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let sum = 0;

for (let i = 0; i < input.length - 1; i++) {
  sum += input[i];
}

const need = input[4] * 4 - sum;
console.log(need >= 0 ? need : 0);
