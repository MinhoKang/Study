const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, N, ...candy] = input;

const candies = candy[0].split(" ").map(Number);

const sum = candies.reduce((a, c) => a + c);

if (sum >= T) {
  console.log("Padaeng_i Happy");
} else {
  console.log("Padaeng_i Cry");
}
