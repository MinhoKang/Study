const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];

const bills = input[1].split(" ").map(Number);

let priceY = 0,
  priceM = 0;

for (let i = 0; i < N; i++) {
  const time = bills[i];

  const divisionY = Math.floor(time / 30) + 1;
  const divisionM = Math.floor(time / 60) + 1;

  priceY += divisionY * 10;
  priceM += divisionM * 15;
}

if (priceM < priceY) {
  console.log("M", priceM);
} else if (priceM > priceY) {
  console.log("Y", priceY);
} else {
  console.log("Y M", priceY);
}
