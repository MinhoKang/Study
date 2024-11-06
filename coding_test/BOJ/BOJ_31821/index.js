const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const prices = [...input.slice(1, N + 1)];
const M = input[N + 1];

const wants = [...input.slice(N + 2)];
let sum = 0;
for (let i = 0; i < M; i++) {
  const select = wants[i];
  const targetPrice = prices[select - 1];

  sum += targetPrice;
}

console.log(sum);
