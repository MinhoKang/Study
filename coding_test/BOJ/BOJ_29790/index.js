const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, U, L] = input;

if (N >= 1000 && (U >= 8000 || L >= 260)) {
  console.log("Very Good");
} else if (N >= 1000 && U < 8000 && L < 260) {
  console.log("Good");
} else if (N < 1000 || (U < 8000 && L < 260)) {
  console.log("Bad");
}
