const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const [A, B] = input;

console.log((A * B).toString());
