const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;
let index = -1;
let GPAs = "";
let count = 0;
let sumC = 0,
  sumG = 0;

const scoreInfo = rest.map((i) => i.split(" ").map(Number));
console.log(scoreInfo);

for (let i = 0; i < +T; i++) {
  if (i === 0) count++;
  if (scoreInfo[i].length === 1 && i !== 0) {
    const division = sumG / count;
    GPAs += `${sumC} ${division} \n`;
    sumC = 0;
    sumG = 0;
    index++;
  } else if (scoreInfo[i].length !== 1) {
    const [C, G] = scoreInfo[i];
    count++;
    sumC += C;
    sumG += G;
  }
}

console.log(GPAs.trim());
