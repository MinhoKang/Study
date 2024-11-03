const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [m, d] = input;

if (m > 2) {
  console.log("After");
} else if (m === 1) {
  console.log("Before");
} else if (m === 2) {
  if (d === 18) {
    console.log("Special");
  } else if (d > 18) {
    console.log("After");
  } else if (d < 18) {
    console.log("Before");
  }
}
