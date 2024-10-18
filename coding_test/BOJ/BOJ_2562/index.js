const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n')

const arr = input.map(Number)

const max =Math.max(...arr)

console.log(max)
console.log(arr.indexOf(max) + 1)