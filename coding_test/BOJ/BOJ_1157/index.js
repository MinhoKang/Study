const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().toUpperCase();

const wordArr = input.split("");
let obj = {};
let most = null;

wordArr.map((w, i) => {
  obj = { ...obj, [w]: obj[w] ? obj[w] + 1 : 1 };
});

const objArr = Object.entries(obj);

let maxCount = 0;
let result = '?';

// objArr.map((i, d) => {
//   if (most === "?") return;
//   if (!most || i[1] > most[1]) {
//     most = i;
//   } else if (i[1] === most[1]) {
//     most = "?";
//   }
// });

objArr.forEach(([char, count]) => {
  if (count > maxCount) {
    maxCount = count;
    result = char;
  } else if (count === maxCount) {
    result = '?'; 
  }
});
console.log(result);
