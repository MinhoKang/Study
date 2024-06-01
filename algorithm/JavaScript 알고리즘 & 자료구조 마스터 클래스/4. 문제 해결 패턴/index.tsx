// 1. 빈도 카운터(freqency counter)
// 객체를 사용해서 다양한 값과 빈도를 수집
// 서로 비슷한 값으로 구성되어 있는지, 서로 간의 아나그램인지, 값이 다른 값에 포함되어 있는지 여부, 빈도를 비교하는데 유용
//  예시
// 조건1: 2개의 배열을 허용하는 same함수
// 조건2: 두 번째 배열이 첫 번째 배열의 제곱이라면 true. 순서는 상관 없음 .

// 먼저 해결하기
const sortNum = (numArr) => {
  return numArr.sort((a, b) => a - b);
};

const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = sortNum(arr1);
  const sorted2 = sortNum(arr2);

  return sorted2.toString() === sorted1.map((num) => num ** 2).toString()
    ?true
    :false
};

same1([1, 2, 3], [4, 1, 9]);
// 시간 복잡도는 O(nlogn)이다. sort()를 사용했기 때문에

// naive solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);

// 배열의 길이에 따라 횟수가 늘어나고 중첩 반복문이 있어서 시간 복잡도가 O(n^2)이다.
// 개선하기

function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

// 객체를 사용해서 빈도를 저장하고 비교하는 방식으로 시간 복잡도를 O(n)으로 개선했다.
// ! 중첩된 반복문보다 반복문을 두 번 사용하는 방식이 더 효율적이다.

// 문제
// 두 개의 문자열을 받고, 서로의 아나그램이면 참이고 아니면 거짓을 반환하는 함수를 작성하라.

// 먼저 풀기
const isAnangram = (str1, str2) => {
  if (str1.length !== str2.length) return console.log(false);

  const str1Obj = {};
  const str2Obj = {};

  for (let str of str1) {
    str1Obj[str] = (str1Obj[str] || 0) + 1;
  }
  for (let str of str2) {
    str2Obj[str] = (str2Obj[str] || 0) + 1;
  }

  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) return console.log(false);
  }

  return console.log(true);
};

isAnangram("rat", "atr");

// 답안
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      // 0은 false값이라서
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// 시간 복잡도는 O(n)으로 같지만 배열을 하나만 할당하는 두 번째 답이 더 효율적이다