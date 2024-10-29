const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [A, B, C] = input;

const X = A * B * C;
const XArr = X.toString().split("");

const count = XArr.reduce((a, c) => {
  a[c] = (Number(a[c]) || 0) + 1;

  return a;
}, Array.from({ length: 10 }).fill(0));

console.log(count.join("\n"));
