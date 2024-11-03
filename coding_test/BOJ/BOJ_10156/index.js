const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [K, N, M] = input;

const price = K * N;
const more = price - M;

console.log(more >= 0 ? more : 0);
