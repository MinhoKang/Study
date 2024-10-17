const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);


console.log(input.reduce((a,c) => a+c,0));
