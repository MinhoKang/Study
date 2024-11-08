const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();

for (let i = 1; i <= input; i++) {
  const starCount = i % input || i;

  let line = "";

  for (let j = 0; j < starCount; j++) {
    line += "*";
  }
  console.log(line);
}

for (let k = input - 1; k >= 1; k--) {
  const starCount = k % input || k;

  let line = "";

  for (let l = 0; l < starCount; l++) {
    line += "*";
  }
  console.log(line);
}
