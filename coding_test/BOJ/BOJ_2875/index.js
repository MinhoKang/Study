const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [N, M, K] = input;

let teamCount = 0;
let intern = 0;

while (N > K || M > K) {
  N -= 2;
  M -= 1;
  teamCount++;
}

console.log(N, M, K, teamCount);
