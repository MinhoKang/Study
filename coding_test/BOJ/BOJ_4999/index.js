const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [A, B] = input;

if (A.length >= B.length) {
  console.log("go");
} else {
  console.log("no");
}
