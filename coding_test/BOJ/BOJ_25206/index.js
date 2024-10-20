const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

const credit = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0,
};

const creditArr = [];
let hakSum = 0;

input.map((i, d) => {
  const thisCredit = i[2];
  const creditToNumber = credit[thisCredit];
  const hak = Number(i[1]);
  if (thisCredit !== "P") {
    hakSum += hak;
    creditArr.push(Number(i[1]) * creditToNumber);
  }
});
console.log(creditArr.reduce((a, c) => a + c, 0) / hakSum);
