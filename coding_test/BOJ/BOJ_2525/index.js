const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const nows = input[0].split(" ").map(Number);

const nowHour = nows[0];
const nowMinute = nows[1];
const required = Number(input[1]);

if (nowMinute + required >= 60) {
  const setMinute = (nowMinute + required) % 60;
  const addHour = Math.floor((nowMinute + required) / 60);
  console.log(
    nowHour + addHour >= 24 ? nowHour + addHour - 24 : nowHour + addHour,
    setMinute
  );
} else {
  console.log(nowHour, nowMinute + required);
}
