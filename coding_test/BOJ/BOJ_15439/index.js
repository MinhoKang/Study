const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

console.log(input ** 2 - input);
