const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

const money = N * 100;

if (money >= M) {
  console.log("Yes");
} else {
  console.log("No");
}
