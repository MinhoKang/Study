const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [R1, S] = input;

const R2 = S * 2 - R1;

console.log(R2);
