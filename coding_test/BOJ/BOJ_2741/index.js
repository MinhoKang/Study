const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();

const arr = Array.from({ length: input }).map((_, i) => i + 1);

console.log(arr.join("\n"));