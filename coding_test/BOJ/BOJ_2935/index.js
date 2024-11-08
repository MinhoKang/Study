const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const num1 = BigInt(input[0]);
const calculation = input[1];
const num2 = BigInt(input[2]);

if (calculation === "+") {
  console.log((num1 + num2).toString());
} else {
  console.log((num1 * num2).toString());
}
