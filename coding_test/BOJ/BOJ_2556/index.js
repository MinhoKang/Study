const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "))
  .map((i) => i.map(Number));

const maxs = [];

input.forEach((a) => maxs.push(Math.max(...a)));

const maxNum = Math.max(...maxs);
const maxNumIndex = maxs.findIndex((e) => e === maxNum);
const maxNumRow = input[maxNumIndex];
const maxNumColumn = maxNumRow.findIndex((e) => e === maxNum);
console.log(maxNum)
console.log(maxNumIndex+1, maxNumColumn+1)