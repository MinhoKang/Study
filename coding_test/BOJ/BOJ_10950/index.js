const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const T = input.shift();

for (i = 0; i < T; i++) {
  const value = input[i].split(" ");
  console.log(Number(value[0]) + Number(value[1]));
}
