const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

let answer = "";

rest.forEach((v, i) => (answer += `${i + 1}. ${v} \n`));

console.log(answer.trim());
