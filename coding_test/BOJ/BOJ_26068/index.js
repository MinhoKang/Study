const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, ...rest] = input;

const N = +n;

const gift = rest.map((i) => i.split("D-"));
console.log(gift.flat().filter((i) => parseInt(i) <= 90).length);
