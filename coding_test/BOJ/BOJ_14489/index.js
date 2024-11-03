const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const price = +input[1];

const sum = A + B;

if (sum < price * 2) {
  console.log(sum);
} else {
  console.log(sum - 2 * price);
}
