const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

const answer = arr.filter((i) => i < X);

console.log(answer.join(' '));
