const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")

const [A, B] = input;

const decimalA = parseInt(A, 2);
const decimalB = parseInt(B, 2);

const sum = decimalA + decimalB;

console.log(sum.toString(2));
