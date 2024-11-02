const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c, d] = input;

console.log(a * 56 + b * 24 + c * 14 + d * 6);
