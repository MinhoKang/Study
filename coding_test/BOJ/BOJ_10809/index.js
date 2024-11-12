const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const alphabets = Array.from({ length: 26 }).fill(-1);

for (let i = 0; i < input.length; i++) {
  const target = input[i];
  const index = target.charCodeAt() - 97;
  if (alphabets[index] === -1) {
    alphabets[index] = i;
  }
}

console.log(alphabets.join(" "));
