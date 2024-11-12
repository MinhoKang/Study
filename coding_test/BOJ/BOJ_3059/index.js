const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;
const arr = Array.from({ length: 26 }).fill(0);

for (let i = 0; i <= T; i++) {
  arr.map((v,i) => {

  })
  arr.fill(0);
  if (i === T) break;
  const words = rest[i];
  for (let j = 0; j < words.length; j++) {
    const wordCode = words[j].charCodeAt();
    const wordIndex = wordCode - 65;
    arr[wordIndex]++;
  }
}

console.log(arr);
