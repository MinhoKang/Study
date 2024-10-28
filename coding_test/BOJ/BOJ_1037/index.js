const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const divisions = input[1].split(" ").map(Number);

const sortedDivisions = divisions.sort((a, b) => a - b);


console.log(sortedDivisions[0] * sortedDivisions[sortedDivisions.length - 1]);
