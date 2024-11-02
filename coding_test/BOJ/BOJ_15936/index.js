const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [M, N] = input;

console.log(M === N ? "1" : "0");
