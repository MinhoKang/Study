const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = BigInt(input);

console.log((N % BigInt(20000303)).toString());
