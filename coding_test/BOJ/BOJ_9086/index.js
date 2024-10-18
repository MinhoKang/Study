const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = +input[0];

for (i = 1; i <= T; i++) {
  const line = input[i];
  if (line.length === 2) {
    console.log(line);
  } else if (line.length === 1) {
    console.log(line.repeat(2));
  } else {
    console.log(`${line[0]}${line[line.length - 1]}`);
  }
}
