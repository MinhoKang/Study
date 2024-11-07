const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, m, k] = input;

const hand = m * k;

console.log(m + hand);
