function maxValue(arr) {
  const max = Math.max(...arr);

  // 배열 내림차순 정렬
  const sortedArr = arr.sort((a, b) => a - b);

  return { max, sortedArr };
}

const arr = [3, 14, 7, 19, 1];
const result = maxValue(arr);
console.log(result);
