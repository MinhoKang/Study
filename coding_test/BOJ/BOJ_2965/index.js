const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, C] = input;

const opp =
  Math.abs(A - B) > Math.abs(C - B) ? Math.abs(A - B) : Math.abs(C - B);

console.log(opp - 1);
