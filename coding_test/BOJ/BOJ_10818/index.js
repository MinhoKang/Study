const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, arr] = input;

const numArr = arr.split(" ").map(Number);
const big = Math.max(...numArr);
const small = Math.min(...numArr);
console.log( small, big);
