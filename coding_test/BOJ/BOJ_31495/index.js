const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");

const first = input[0];
const last = input[input.length - 1];

if (
  first === '"' &&
  last === '"' &&
  input[1] !== " " &&
  input[1] !== "" &&
  input.length > 2
) {
  console.log(input.slice(1, input.length - 1).join(""));
} else {
  console.log("CE");
}
