const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

console.log(Math.ceil(input / 5));
