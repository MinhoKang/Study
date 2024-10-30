const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, V] = input;

let at = 0;
let count = 0;

while (at !== V) {
  at !== V && count++;
  at += A;
  at !== V && count++;
  at -= B;
  at !== V && count++;
}

console.log(at);
console.log(count);
