const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

const M = (B - A) / 400;

const winRate = 1 / (1 + 10 ** M);

console.log(winRate);
