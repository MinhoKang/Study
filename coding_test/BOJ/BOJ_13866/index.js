const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sorted = input.sort((a, b) => a - b);

const sum1 = sorted[0] + sorted[3];
const sum2 = sorted[1] + sorted[2];

console.log(Math.abs(sum1 - sum2));
