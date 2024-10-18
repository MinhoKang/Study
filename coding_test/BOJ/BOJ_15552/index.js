const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const T = +input[0];
let answer = "";

for (i = 1; i <= T; i++) {
  const value = input[i].split(" ");
  answer += +value[0] + +value[1] + "\n";
}
console.log(answer);

// 데이터가 많아질 경우 for문 안에서 console.log는 성능 저하
// 개행문자를 추가해서 한 번에 출력하는게 더 빠름