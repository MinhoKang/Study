const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

const sum = input.reduce((a, c) => {
  if (c === -1n) return a;

  a += c;

  return a;
}, 0n);

console.log(sum.toString());
