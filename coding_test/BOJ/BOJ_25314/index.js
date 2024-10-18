const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const N = +input;

console.log(`${"long ".repeat(N / 4)}int`);
