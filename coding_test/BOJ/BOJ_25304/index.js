const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const X = +input.shift();
const N = +input.shift();

let sum = 0;

for (i = 0; i < N; i++) {
  const arr = input[i].split(" ");
  sum += +arr[0] * +arr[1];
}

console.log(X === sum ? "Yes" : "No");
