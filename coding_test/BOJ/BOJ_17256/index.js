const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [ax, ay, az] = input[0];
const [cx, cy, cz] = input[1];

const bx = cx - az;
const by = cy / ay;
const bz = cz - ax;

console.log(bx, by, bz);
