const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];

const times = input[1].split(" ").map(Number);

const sumTimes = times.reduce((a, c) => a + c);
const rest = 8 * (times.length - 1);

const total = rest + sumTimes;

const day = Math.floor(total / 24);
const hour = total % 24;

console.log(day, hour);
