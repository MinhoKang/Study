const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = +input[0];
let answer = "";

for (i = 1; i <= T; i++) {
  const [times, word] = input[i].split(" ");
  const wordArr = word.split('')
  console.log(wordArr)
  wordArr.map(i => console.log(i))
  // for(j=0;j< +times; j++) {
  //   word.split('').forEach(w =>
  //     answer += w.repeat(+times)
  //   )
  // }
}
console.log(answer);
