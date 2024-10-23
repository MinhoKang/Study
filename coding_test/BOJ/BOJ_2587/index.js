const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((a, b) => a + b, 0);

console.log(sum / input.length);
console.log(input.sort((a, b) => a - b)[2]);
