const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const whatIsThisTriangle = ([a, b, c]) => {
  if (a === 0 && b === 0 && c === 0) return;

  const sorted = [a, b, c].sort((a, b) => a - b);
  const isNoTriangle = sorted[2] >= sorted[0] + sorted[1];
  if (isNoTriangle) return console.log("Invalid");

  if (a === b && a === c) {
    return console.log("Equilateral");
  } else if (a === b || a === c || c === b) {
    return console.log("Isosceles");
  } else {
    return console.log("Scalene");
  }
};

input.forEach((i) => whatIsThisTriangle(i));
