const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n").map(Number);

let cute = 0,
  notCute = 0;

for (let i = 1; i < input.length - 1; i++) {
  if (input[i] === 0) {
    notCute++;
  } else {
    cute++;
  }
}

console.log(cute > notCute ? "Junhee is cute!" : "Junhee is not cute!");
