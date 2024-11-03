const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((a, c) => {
  const realC = c < 40 ? 40 : c;

  a += realC;

  return a;
}, 0);

console.log(sum / 5);
