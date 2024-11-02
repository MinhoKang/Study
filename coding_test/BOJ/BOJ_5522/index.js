const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((a, b) => a + b);

console.log(sum);
