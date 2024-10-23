const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;
const sorted = rest.map((i) => i.split(" ")).sort((a, b) => a[0] - b[0]);
console.log(sorted.map((i) => i.join(" ")).join('\n'));
