const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const [n, m] = input;

console.log((n / m).toString());
console.log((n % m).toString());
