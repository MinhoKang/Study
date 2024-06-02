// 다중 포인터
// 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것

// 예시
// 합이 0이 되는 수의 조합 배열을 반환. 만약 없다면 undefined
// naive version

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// 반복문 안에 반복문이 있으므로 O(n^2)의 시간 복잡도, 공간복잡도: O(1)

// refactor
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// 시간복잡도: O(n) 공간 복잡도: O(1)

// 에시 2
// 배열에서 숫자의 개수를 반환

// 먼저 시도
const countUniqueValues1 = (arr) => {
  if (arr.length === 0) return 0;

  let before = arr[0];
  return arr.reduce((acc, cur) => {
    if (cur !== before) {
      acc++;
      before = cur;
    }
    return acc;
  }, 1);
};

countUniqueValues1([1, 1, 2, 3, 4, 4]);

// 답안
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

// 두 코드 모두 시간 복잡도는 O(n) 공간복잡도는O(1)
