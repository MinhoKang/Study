const fs = require("fs");
const input = fs.readFileSync("./input.txt");

console.log(input.reduce((a, c) => a + c, 0));
