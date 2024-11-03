const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M, K] = input;

const row = Math.floor(K / M);
const col = K % M;

console.log(row, col);
