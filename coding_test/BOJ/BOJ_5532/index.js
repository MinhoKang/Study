const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [L, A, B, C, D] = input;
let math = B;
let korean = A;
let count = 0;

while (math > 0 || korean > 0) {
  if (math > 0) {
    math -= D;
  }

  if (korean > 0) {
    korean -= C;
  }
  count++;
}

console.log(L - count);
