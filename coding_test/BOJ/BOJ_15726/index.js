const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, C] = input;

if ((A * B) / C >= (A / B) * C) {
  console.log(parseInt((A * B) / C));
} else if ((A * B) / C < (A / B) * C) {
  console.log(parseInt((A / B) * C));
}
