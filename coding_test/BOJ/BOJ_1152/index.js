const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
console.log(input[0] === "" ? 0 : input.length);
// input이 빈 공백일 경우 결과물이 빈 문자열 하나가 있는 배열로 되어서 1이 출력됨. 이에 대핸 예외 처리