const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const n = Number(input);

console.log(n * 4);
