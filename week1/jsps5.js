function car(distance) {
  let boot = false; // 시동 여부
  let driving = 0; // 주행한 거리

  // 주행 함수
  function drive() {
    if (!boot) {
      console.log("시동이 꺼져 있습니다.");
      return;
    }

    if (driving >= distance) {
      console.log("주행이 완료되었습니다.");
      return;
    }

    driving += 1;
    console.log(`주행 중: ${driving}km`);

    if (driving >= 40) {
      console.log("안전 위험으로 시동을 종료합니다.");
      boot = false;
    }
  }

  // 시동 거는 함수
  function start() {
    if (boot) {
      console.log("이미 시동이 걸려 있습니다.");
      return;
    }

    boot = true;
    console.log("시동이 걸렸습니다.");
  }

  // 시동 끄는 함수
  function stop() {
    if (!boot) {
      console.log("이미 시동이 꺼져 있습니다.");
      return;
    }

    boot = false;
    console.log("시동이 꺼졌습니다.");
  }

  return {
    start,
    stop,
    drive,
  };
}

// 최종 목표 거리 10km인 자동차 생성
const myCar = car(10);

myCar.start(); // 시동 걸기
myCar.drive(); // 주행 1
myCar.drive(); // 주행 2
myCar.stop(); // 시동 끄기
myCar.start(); // 시동 걸기
myCar.start(); // 이미 시동이 걸려 있음
myCar.drive(); // 주행 3?
myCar.drive();
myCar.drive();
myCar.drive();
myCar.drive();
myCar.drive();
myCar.drive();
myCar.drive(); // 주행 (40km 이상 주행)

//-----------------------------------------------------------------------

// let on = false;
// const car = function (...args) {
//   // 첫 번째 변수에는 시동걸기, 시동끄기, 주행 기능
//   // 두 번째 변수에는 주행기능을 선택했을 시에만 주행거리를 입력함.
//   const mode = args[0];
//   const distance = args[1];
//   switch (mode) {
//     case "시동걸기":
//       if (on === false) {
//         console.log("시동을 겁니다.");
//         on = true;
//       } else console.log("시동이 이미 켜져 있습니다.");
//       break;
//     case "시동끄기":
//       if (on === true) {
//         console.log("시동을 끕니다.");
//         on = false;
//       } else console.log("시동이 이미 꺼져 있습니다.");
//       break;
//     case "주행 기능":
//       if (on === false) {
//         console.log("시동이 꺼져 있어 주행할 수 없습니다.");
//         break;
//       }
//       if (distance >= 40) {
//         console.log("안정 위험으로 시동을 종료했습니다.");
//         on = false;
//         break;
//       }
//       for (let i = 1; i <= distance; i++) {
//         console.log(`${i}km를 달렸습니다.`);
//       }
//       console.log("주행을 완료했습니다.");
//       break;
//     default:
//       console.log("알 수 없는 기능... 둘리~ 둘리~");
//   }
// };
// car("시동끄기");
// car("시동걸기");
// car("주행 기능", 39);
// car("주행 기능", 40);
// car("시동끄기");
