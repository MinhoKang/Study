const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const time = input.reduce((a, c) => a + c);

const minute = Math.floor(time / 60);
const sec = time % 60;

console.log(minute);
console.log(sec);
