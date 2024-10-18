const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
// trim을 사용해야지만 맨 앞과 맨 뒤에 존재할 수 있는 공백을 제거할 수 있음

for (i = 0; i < input.length; i++) {
  const A = Number(input[i].split(" ")[0]);
  const B = Number(input[i].split(" ")[1]);

  console.log(A + B);
}
