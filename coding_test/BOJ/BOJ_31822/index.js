const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [target, N, ...rest] = input;

let count = 0;

for (let i = 0; i < +N; i++) {
  const possible = rest[i].slice(0, 5);
  if (possible === target.slice(0, 5)) count++;
}

console.log(count);
