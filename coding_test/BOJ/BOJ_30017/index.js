const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

if (A > B) {
  console.log(B + B + 1);
} else if (A <= B) {
  console.log(A + A - 1);
}
