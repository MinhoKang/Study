const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input;
const numArr = K.split("");

let even = 0;
let odd = 0;

for (let i = 0; i < +N; i++) {
  const num = +numArr[i];

  if (num % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

if (even > odd) {
  console.log(0);
} else if (odd > even) {
  console.log(1);
} else {
  console.log(-1);
}
