const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const count = arr.reduce((a, c) => {
  if (c >= N) {
    a += N;
  } else {
    a += c;
  }

  return a;
}, 0);

console.log(count);
