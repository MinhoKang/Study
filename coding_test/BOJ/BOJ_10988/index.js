const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const reverse = input.split("").reverse().join("");

console.log(input === reverse ? 1 : 0);
