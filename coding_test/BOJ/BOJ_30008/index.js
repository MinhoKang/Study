const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const grade = input[1].split(" ").map(Number);

const deunggeup = grade.reduce((a, c) => {
  const cGrade = Math.floor((c * 100) / N);

  if (cGrade <= 60) {
    if (cGrade >= 0 && cGrade <= 4) {
      a.push(1);
    } else if (cGrade >= 4 && cGrade <= 11) {
      a.push(2);
    } else if (cGrade > 11 && cGrade <= 23) {
      a.push(3);
    } else if (cGrade > 23 && cGrade <= 40) {
      a.push(4);
    } else if (cGrade > 40 && cGrade <= 60) {
      a.push(5);
    }
  } else {
    if (cGrade > 60 && cGrade <= 77) {
      a.push(6);
    } else if (cGrade > 77 && cGrade <= 89) {
      a.push(7);
    } else if (cGrade > 89 && cGrade <= 96) {
      a.push(8);
    } else if (cGrade > 96 && cGrade <= 100) {
      a.push(9);
    }
  }

  return a;
}, []);

console.log(deunggeup.join(" "));
