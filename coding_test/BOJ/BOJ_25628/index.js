const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

console.log(Math.min(Math.floor(A / 2), B));
