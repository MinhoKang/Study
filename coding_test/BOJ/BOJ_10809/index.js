const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const wordArr = input.split("");

wordArr.map((a) => {
  const index = input.indexOf(a)
  console.log(index);
  console.log(wordArr)
  wordArr.splice(index, index +1)
  console.log(wordArr)
});
