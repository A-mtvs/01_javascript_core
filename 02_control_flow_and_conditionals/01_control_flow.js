/*
조건문
자바스크립트에서 조건문은 특정 조건에 따라 코드 블록을 실행하는 데 사용된다.
*/

/*
1. if-else 조건문
조건에 따라 코드 블록을 실행하거나 다른 코드 블록을 실행한다.
*/
console.log("=== if-else 조건문 ===");

let age = 20;

if (age >= 18) {
  console.log("성인입니다."); // 조건이 참일 경우 실행
} else {
  console.log("미성년자입니다."); // 조건이 거짓일 경우 실행
}

// 다중 조건 처리 (else if)
let score = 85;

if (score >= 90) {
  console.log("A 학점");
} else if (score >= 80) {
  console.log("B 학점");
} else if (score >= 70) {
  console.log("C 학점");
} else {
  console.log("F 학점");
}

/*
2. 중첩 if-else
if-else 문은 중첩되어 복잡한 조건을 처리할 수 있다.
*/
let isMember = true;
let purchaseAmount = 150;

if (isMember) {
  if (purchaseAmount > 100) {
    console.log("VIP 회원 할인 적용");
  } else {
    console.log("일반 회원 할인 적용");
  }
} else {
  console.log("할인 미적용");
}


let temperature = 30;

if (temperature > 25) {
    console.log("날씨가 덥습니다.");
    if (temperature > 35) {
        console.log("더위에 주의하세요!");
    } else {
        console.log("적당한 더위입니다.");
    }
} else if (temperature < 15) {
    console.log("날씨가 춥습니다.");
} else {
    console.log("날씨가 적당합니다.");
}
