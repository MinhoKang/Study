const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sum = input.reduce((a, c) => {
  a += c ** 2;
  return a;
}, 0);
console.log(sum % 10);
