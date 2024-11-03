const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("/")
  .map(Number);

const [K, D, A] = input;

if (D === 0 || K + A < D) {
  console.log("hasu");
} else {
  console.log("gosu");
}
