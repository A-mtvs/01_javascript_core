
/*
switch 문
switch 문은 하나의 표현식을 평가하고, 그 값에 따라 여러 코드 블록 중 하나를 실행한다. 
그러나 하나의 코드 블럭을 실행한 이후 break가 없다면 해당 블럭 이후 모든 코드 블럭을 실행하게 된다.
*/
console.log("\n=== switch 문 ===");

let day = 3;

switch (day) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  case 6:
  case 7: // 여러 case를 묶어서 처리
    console.log("주말입니다.");
    break;
  default:
    console.log("잘못된 요일입니다.");
}

// switch 문으로 범위 처리 (잘못된 방식의 예)
let scoreRange = 85;

switch (true) {
  case scoreRange >= 90:
    console.log("A 학점");
    break;
  case scoreRange >= 80:
    console.log("B 학점");
    break;
  case scoreRange >= 70:
    console.log("C 학점");
    break;
  default:
    console.log("F 학점");
}
// 위 코드는 의도한 대로 작동하지만, if-else로 처리하는 것이 더 적합하다.

/*
4. 실습 문제
1) 점수에 따라 학점을 출력하는 if-else 조건문 작성
2) 요일 번호(1~7)에 따라 요일 이름을 출력하는 switch 문 작성
*/
console.log("\n=== 실습 문제 ===");

// 1) if-else로 학점 출력
let myScore = 76;

if (myScore >= 90) {
  console.log("A 학점");
} else if (myScore >= 80) {
  console.log("B 학점");
} else if (myScore >= 70) {
  console.log("C 학점");
} else {
  console.log("F 학점");
}

// 2) switch로 요일 이름 출력
let myDay = 5;

switch (myDay) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
  case 7:
    console.log("주말");
    break;
  default:
    console.log("잘못된 요일 번호");
}
