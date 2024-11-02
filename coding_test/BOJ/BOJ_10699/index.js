const formatDate = (date) => {
  const year = date.getFullYear(); // 연도
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 +1)
  const day = String(date.getDate()).padStart(2, "0"); // 일

  return `${year}-${month}-${day}`; // yyyy-mm-dd 형식으로 반환
};

const today = new Date(); // 현재 날짜
console.log(formatDate(today)); // 예: 2024-11-02
