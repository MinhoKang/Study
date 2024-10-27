const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

console.log(input);
// const [N, M] = input[0].split(" ").map(Number);

// const cardNum = input[1].split(" ").map(Number);
