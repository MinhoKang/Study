// Big-O의 필요성
// 여러 해결 법이 있는 경우 가장 효율적인 방법을 찾는 시스템

// 코드 시간 재기
const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUpTo(6)); // 21

const addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(addUpTo2(6)); // 21

// 무엇이 더 나은 코드인가?
// 더 나은 코드의 조건은?
// 1. 더 빠른 속도
// 2. 더 적은 메모리 사용
// 3. 가독성

// 시간복잡도 
// 1. 속도 측정
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

let t3 = performance.now();
addUpTo2(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);
// 기기에 따라 시간 차이가 나는 문제 발생
// 똑같은 기계더라도 시간이 다르게 나올 수 있음
// 코드가 복잡해지면 더 많은 시간이 걸림

// 2. 연산 개수
// addUpTo는 n개의 연산을 수행
// addUpTo2는 3개의 연산을 수행

// 모든 연산 개수를 세는 것은 불가능
// 대신, 연산의 개수를 비교하는 것이 중요
// Big-O에서는 전체적인 추세를 비교하는 것이 중요

// Big-O
// 입력된 내용이 늘어날수록 알고리즘의 속도가 어떻게 변하는지를 나타내는 표기법
// 오직 전반적인 추세에만 관심을 가짐

// addUpTo의 Big-O는 O(n) (실제로는 5n+2 이지만 전체적인 추세가 중요)
// addUpTo2의 Big-O는 O(1)
// https://rithmschool.github.io/function-timer-demo/

// Big-O 표현식 단순화
// 1. 상수를 무시: O(2n) -> O(n), O(500) -> O(1), O(13n^2) -> O(n^2)
// 2. 다항식에서 가장 높은 차수만 남김: O(n^2 + 5n + 8) -> O(n^2), O(1000n + 50) -> O(n)
// 3. 인덱스를 사용하면 모두 같은 시간이 걸림
// 4. 루프가 있으면 복잡도는 루프의 길이 * 루프 안의 연산들


// 공간복잡도(Space Complexity) -> 메모리 사용량 (변수 할당)
// 보조공간복잡도
// 기본 규칙
// - 불리언, 숫자, undefined, null은 공간복잡도에 영향을 미치지 않음 -> 불변공간
// - 문자열은 길이에 비례한 공간을 차지 -> O(n)
// - 배열은 길이에 비례한 공간을 차지 -> O(n)
// - 객체는 키와 값에 비례한 공간을 차지 -> O(n)

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// sum의 공간복잡도는 O(1) (total 변수 하나만 사용)

const double = (arr: number[]) => {
  let newArr: number[] = []; 
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// double의 공간복잡도는 O(n) (newArr 배열 사용)
// newArr 배열의 길이는 arr 배열의 길이와 같음. 변수 i까지 고려하면 O(n + 1)이지만 O(n)으로 표현


// Loagarithm
// 2진 로그를 기본으로 함
// 간략하게 계산하는 방법
// 1. 2로 나누어 떨어지는지 확인
// 2. 2로 나누어 떨어지면 다시 2로 나누기
// 3. 2로 나누어 떨어지지 않으면 1을 빼기
// 4. 1이 될 때까지 반복
// 5. 1이 되면 몇 번 나누었는지 세기

// 예시
// 8 -> 4 -> 2 -> 1 (3번)
// 25 -> 24 -> 12 -> 6 -> 3 -> 2 -> 1 (6번이지만 1을 두 번 뺐으므로 대략 4.xx)

