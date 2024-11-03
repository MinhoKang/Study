const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...rest] = input;
let answer = "";

for (let i = 0; i < n; i++) {
  answer += `=`.repeat(rest[i]);
  answer += "\n";
}

console.log(answer.trim());
