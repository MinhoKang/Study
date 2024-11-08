const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const sum1 = input[0] + input[1];
const sum2 = input[2] + input[3];

console.log(+sum1 + +sum2);
