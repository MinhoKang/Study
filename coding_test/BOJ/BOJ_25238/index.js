const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b] = input;

const defenceRate = a - a * (b / 100);

if (defenceRate >= 100 && a > 100) {
  console.log(0);
} else {
  console.log(1);
}
