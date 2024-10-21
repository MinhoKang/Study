const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, w, h] = input;

const lineArr = [w - x, h - y, x - 0, y - 0];

console.log(Math.min(...lineArr));
