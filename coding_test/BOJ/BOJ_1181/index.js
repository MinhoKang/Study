const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

console.log(input);

const answer = [];

// for (i = 1; i <= N; i++) {
//   if (i === 1) return answer.push(input[i]);
//   if (input[i].length > input[i - 1].length) {
//     answer.push(input[i]);
//   } else if (input[i].length < input[i - 1].length) {
//     answer.unshift(input[i]);
//   } else if(input[i].length === input[i - 1].length){
//     if(input[i] > input[i-1]) {
//       answer
//     }
//   }
// }
for (i = 1; i <= N; i++) {
  answer.push(input[i]);
}
const newArr = new Set([...answer]);
