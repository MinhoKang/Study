const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 숫자 빈도 수를 기록할 객체 생성
const frequency = {};

// 각 숫자의 빈도 수를 계산
for (let i = 0; i < input.length; i++) {
  const num = input[i];
  frequency[num] = (frequency[num] || 0) + 1;
}

// 빈도 수가 홀수인 숫자를 출력
for (const num in frequency) {
  if (frequency[num] % 2 === 1) {
    console.log(num);
    break;
  }
}
