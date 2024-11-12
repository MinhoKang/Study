const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...rest] = input;

console.log(
  rest
    .sort((a, b) => a - b)
    .join("\n")
    .trim()
);
