const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const apples = input[0] * 3 + input[1] * 2 + input[2] * 1;
const bananas = input[3] * 3 + input[4] * 2 + input[5] * 1;

if (apples === bananas) {
  console.log("T");
} else if (apples > bananas) {
  console.log("A");
} else {
  console.log("B");
}
