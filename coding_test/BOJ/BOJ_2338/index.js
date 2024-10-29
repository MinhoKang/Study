const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);
const [A, B] = input;

console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());
