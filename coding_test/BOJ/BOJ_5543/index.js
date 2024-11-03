const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const coke = input[3];
const spr = input[4];

let cheap = 20001 + 2000;

const cost = input.forEach((v, i) => {
  if (i >= 3) return;

  if (v + coke - 50 < cheap) cheap = v + coke - 50;
  if (v + spr - 50 < cheap) cheap = v + spr - 50;
});

console.log(cheap);
