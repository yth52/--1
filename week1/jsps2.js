const menu = {
  야채곱창: 5,
  바나나우유: 10,
  삼각김밥: 15,
  도시락: 10,
  샌드위치: 10,
};

function checkmenu(item, count) {
  if (!(item in menu)) {
    console.log(`${item}는(은) 전산표에 없는 품목입니다.`);
    return;
  }

  if (count === menu[item]) {
    console.log(`${item} ${count}개는 전산표와 일치합니다.`);
  } else {
    console.log(`${item} ${count}개는 전산표와 일치하지 않습니다.`);
  }
}

checkmenu("야채곱창", 5); // 야채곱창 5개는 전산표와 일치합니다.
checkmenu("바나나우유", 15); // 바나나우유 15개는 전산표와 일치하지 않습니다.
checkmenu("콜라", 10); // 콜라는(은) 전산표에 없는 품목입니다.
