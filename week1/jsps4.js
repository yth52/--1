function solution(arr) {
  // 짝수 개수를 저장할 변수와 홀수 개수를 저장할 변수 초기화
  let a = 0;
  let b = 0;

  // 배열을 순회하며 짝수와 홀수 개수를 계산
  for (let num of arr) {
    if (num % 2 === 0) {
      a++;
    } else {
      b++;
    }
  }

  // 짝수 개수와 홀수 개수를 담은 배열을 반환
  return [a, b];
}

const arr = [1, 2, 3, 4, 5];
const a = solution(arr);
console.log(a);

// function solution(arr) {
//     let resultArr = [0, 0];
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] % 2 ? ++resultArr[1] : ++resultArr[0];
//     }
//     return resultArr;
//   }

//   let arr2 = [1, 2, 3, 4, 5];
//   let b = solution(arr2);
//   console.log(b);
