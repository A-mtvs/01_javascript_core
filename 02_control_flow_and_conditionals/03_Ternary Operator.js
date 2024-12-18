/*
삼항 연산자
삼항 연산자는 간단한 조건문을 한 줄로 작성할 수 있도록 도와주는 연산자이다.
구조: 조건식 ? 참일 경우 실행할 코드 : 거짓일 경우 실행할 코드
*/

/*
1. 삼항 연산자의 기본 사용법
삼항 연산자는 조건식의 결과에 따라 두 가지 값 중 하나를 반환한다.
*/
console.log("=== 삼항 연산자의 기본 사용법 ===");

let age = 20;

// 조건문 if-else 방식
if (age >= 18) {
  console.log("성인입니다."); // 조건이 참일 경우
} else {
  console.log("미성년자입니다."); // 조건이 거짓일 경우
}

// 삼항 연산자로 동일하게 표현
console.log(age >= 18 ? "성인입니다." : "미성년자입니다.");


// =======================================


/*
2. 삼항 연산자를 활용한 변수 값 할당
삼항 연산자를 사용하면 조건에 따라 변수에 값을 할당할 수 있다.
*/
console.log("\n=== 삼항 연산자를 활용한 변수 값 할당 ===");

let isMember = true;
let discount = isMember ? 20 : 0; // 조건에 따라 할인율 결정
console.log("할인율:", discount, "%");

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C"; // 중첩 삼항 연산자
console.log("학점:", grade);


// =======================================


/*
3. 삼항 연산자와 함수
삼항 연산자는 함수 내에서도 간결하게 조건을 처리할 때 유용하다.
*/
console.log("\n=== 삼항 연산자와 함수 ===");

function checkNumber(num) {
  return num > 0 ? "양수" : num < 0 ? "음수" : "0";
}

console.log("checkNumber(10):", checkNumber(10)); // 양수
console.log("checkNumber(-5):", checkNumber(-5)); // 음수
console.log("checkNumber(0):", checkNumber(0));  // 0


// =======================================



/*
4. 삼항 연산자의 주의점
- 조건이 복잡해질 경우 코드의 가독성이 떨어질 수 있다.
- 중첩된 삼항 연산자는 가독성을 고려하여 적절히 사용해야 한다.
*/
console.log("\n=== 삼항 연산자의 주의점 ===");

let result = score > 90
  ? "A 학점"
  : score > 80
  ? "B 학점"
  : score > 70
  ? "C 학점"
  : "F 학점";
console.log("점수 결과:", result);
// 위 코드에서 중첩된 삼항 연산자는 if-else로 변환하는 것이 가독성이 더 좋을 수 있다.
