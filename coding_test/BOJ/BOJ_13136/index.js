const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [R, C, N] = input;

const col = Math.ceil(R / N);
const row = Math.ceil(C / N);

console.log(col * row);
