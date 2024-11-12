// 두 개의 배열을 허용하는 same함수
// 배열의 모든 값이 두 번째 배열의 제곱 해당하는 값을 가지면 참을 반환

// 먼저 시도
const same = (nums1, nums2) => {
  if (nums1.length !== nums2.length) return false;

  let countSame = 0;
  let dontNeedToCheck = false;

  for (let i = 0; i < nums1.length; i++) {
    if (dontNeedToCheck) break;

    const nums1Target = nums1[i];

    for (let j = 0; j < nums2.length; j++) {
      if (nums1Target ** 2 === nums2[j]) {
        countSame++;
      } else {
        dontNeedToCheck = true;
      }
    }
  }
  return dontNeedToCheck === false ? false : true;
};

// 방법 1
const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }

  return true;
};

// 위 방법들은 O(N^2)
// 중첩된 반복문은 사용하지 않는 것이 가장 좋음

const same3 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

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
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
};

// 예제: 애너그램
// 배열 두 개를 받는 함수
// arr1에 나오는 글자의 수와 arr2에 나오는 글자의 수가 같으면 true 아니라면 false

// 내가 한 방식
const validAnagram = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === 0 && arr2.length === 0) return true;

  let arr1Counter = {};
  let arr2Counter = {};

  for (let word of arr1) {
    arr1Counter[word] = (arr1Counter[word] || 0) + 1;
  }
  for (let word of arr2) {
    arr2Counter[word] = (arr2Counter[word] || 0) + 1;
  }
  for (let key in arr1Counter) {
    if (!(key in arr2Counter)) return false;
    if (arr1Counter[key] !== arr2Counter[key]) return false;
  }
  return true;
};

console.log(validAnagram("qwe a", "ew qa"));

// 답안
const validAnagram2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const lookup = {};

  for (let i = 0; i < arr1.length; i++) {
    const letter = arr1[i];
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let j = 0; j < arr2.length; j++) {
    const letter = arr2[j];
    if (!lookup[letter]) {
  // 해당 값이 0이어도 false니까 이 조건문에 걸림
      return false;
    } else {
      lookup[letter]--;
    }
  }
  return true;
};

console.log(validAnagram2("qwea", "ewqa"));
