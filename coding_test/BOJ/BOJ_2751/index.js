const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n").map(Number);

const N = input[0]

const arr = [];
for (i = 1; i <= N; i++) {
  arr.push(input[i]);
}

console.log((arr.sort((a, b) => a - b)).join('\n'));
