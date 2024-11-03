const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [d1, d2] = input;

const pi = 3.141592;

const sum = d1 * 2 + d2 * 2 * pi;

console.log(sum);
