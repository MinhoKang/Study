const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const croatiaStringObj = {
  č: "c=",
  ć: "c-",
  dž: "dz=",
  đ: "d-",
  lj: "lj",
  nj: "nj",
  š: "s=",
  ž: "z=",
};

const swappedCroatiaStringObj = {
  "c=": "č",
  "c-": "ć",
  "dz=": "dž",
  "d-": "đ",
  lj: "lj",
  nj: "nj",
  "s=": "š",
  "z=": "ž",
};

const isInclude = (string) => {
  return input.includes(string);
};
// const croatiaStringArr = Object.keys(croatiaStringObj);

// console.log(croatiaStringArr.find("dž"));
// for (cs of croatiaStringArr) {
//   input.replace(cs, croatiaStringObj[cs]);
// }
