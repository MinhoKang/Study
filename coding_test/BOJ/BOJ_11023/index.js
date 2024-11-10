const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sum = input.reduce((a, c) => a + c);

console.log(sum);
