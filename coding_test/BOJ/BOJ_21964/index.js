const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n')

const N=+input[0]

console.log(input[1].slice(N-5))
