const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const split = input.split("DKSH");

console.log(split.length - 1);
