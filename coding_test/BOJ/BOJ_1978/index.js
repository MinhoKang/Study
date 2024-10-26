const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, rest] = input;

const nums = rest.split(" ").map(Number);
let answer = 0;

for (const number of nums) {
  const divisions = Array.from({ length: number })
    .map((_, i) => i + 1)
    .reduce((acc, cur) => {
      number % cur === 0 && acc.push(cur);
      return acc;
    }, []);

  divisions.length === 2 && answer++;
}
console.log(answer)