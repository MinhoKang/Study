const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sorted = input.sort((a, b) => a - b);

console.log(sorted[1]);
