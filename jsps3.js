function checkArray(arr, num) {
  // 배열의 각 요소에 10을 더해 새로운 배열 생성
  const ar = arr.map((al) => al + 10);

  // 검사하고자 하는 수가 새로운 배열에 있는지 확인
  // indexOf 배열 내의 요소의 최초의 인덱스. 발견되지 않으면 -1.
  const index = ar.indexOf(num);

  // 검사하고자 하는 수가 없는 경우
  if (index === -1) {
    console.log("결과값이 없습니다");
    return;
  }

  // 검사하고자 하는 수가 있는 경우
  const filter = ar.filter((al) => al !== num);
  return filter;
}

const arr = [1, 2, 3, 4, 5];
const a = checkArray(arr, 11);
console.log(a);
