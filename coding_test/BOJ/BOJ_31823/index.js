const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [NM, ...rest] = input;
const [N, M] = NM.split(" ").map(Number);
const strict = rest.map((i) => i.split(" "));
console.log(strict);
 