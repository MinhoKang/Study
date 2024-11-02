const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.forEach((i) => {
  const [a, b] = i;
  if (a === 0) return;

  a > b ? console.log("Yes") : console.log("No");
});
