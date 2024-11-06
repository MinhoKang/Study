const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];
const friends = input[1].split(" ");
const rabbit = input[2];

let same = 0;

for (let i = 0; i < N; i++) {
  if (friends[i] === rabbit) same++;
}

console.log(same);
