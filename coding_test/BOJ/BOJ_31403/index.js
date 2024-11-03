const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [A, B, C] = input;

const number = A + B - C;

const string = +(A.toString() + B.toString()) - C;

console.log(number);
console.log(string);
