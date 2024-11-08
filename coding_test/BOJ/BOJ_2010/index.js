const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...rest] = input;

const sum = rest.reduce((a, c) => a + c);

console.log(sum - (N - 1));
