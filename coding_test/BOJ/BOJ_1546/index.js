const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const max = Math.max(...arr);

const newArr = arr.map((i) => (i / max) * 100);
console.log(newArr.reduce((a, c) => a + c, 0) / N);
