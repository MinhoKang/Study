const fs = require("fs");
// const input = fs.readFileSync(0).toString();

const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const [A, B] = input;


const newA = Number(A.split("").reverse().join(""));
const newB = Number(B.split("").reverse().join(""));

if (newA > newB) {
  console.log(newA);
} else {
  console.log(newB);
}
