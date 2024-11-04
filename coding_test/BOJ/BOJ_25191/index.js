const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];
const [A, B] = input[1].split(" ").map(Number);

const coke = Math.floor(A / 2);
const sum = coke + B;

console.log(Math.min(sum, N));
