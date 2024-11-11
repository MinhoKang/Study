const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...rest] = input;

let type = "";
let Q = 0;

const num1 = rest[0];
const num2 = rest[1];
const num3 = rest[2];
const lastNum = rest[rest.length - 1];

if (num2 - num1 === num3 - num2) {
  type = "등차";
  Q = num2 - num1;
  console.log(lastNum + Q);
} else {
  type = "등비";
  Q = num2 / num1;
  console.log(lastNum * Q);
}
