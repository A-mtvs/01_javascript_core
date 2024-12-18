// =============================== 원시 자료형 
// 문제 : 다음 변수들의 자료형을 출력하는 코드를 작성하시오.
let num = 42;
let str = "Hello";
let isTrue = true;
let emptyValue = null;
let undefinedValue;
// -- 정답 
console.log(num);
console.log(str);
console.log(isTrue);
console.log(emptyValue);
console.log(undefinedValue);

// ================================= 동적 타입
// 문제: 하나의 변수에 숫자, 문자열, 불리언 값을 차례로 할당하고, 각 타입을 출력하는 코드를 작성하시오.
/*
예시:
- 처음에는 숫자 `100`을 할당
- 다음에는 문자열 `"Now I'm a string"`을 할당
- 마지막으로 불리언 `false`를 할당
*/

// -- 정답
let variable = 100; // 처음에는 숫자
console.log(typeof variable); // "number"

variable = "Now I'm a string"; // 이제 문자열로 변경
console.log(typeof variable); // "string"

variable = false; // 이제 불리언으로 변경
console.log(typeof variable); // "boolean"


// ========================== 명시적 형변환
// 문제: 문자열 "456"을 숫자로 변환한 후, 그 숫자에 10을 더하는 코드를 작성하시오. 결과를 출력하시오.

// -- 정답 
let strNum = "456";
let num2 = Number(strNum); // 문자열을 숫자로 변환
let result2 = num + 10; // 10을 더하기
console.log(result); // 466

// ========================= 묵시적 형변환
// 문제: 숫자 20와 문자열 "10"을 더한 결과를 변수에 저장하고, 그 결과를 출력하시오.

// -- 정답
let num3 = 20;
let str3 = "10";
let result3 = num3 + str3; // 묵시적 형변환 발생
console.log(result3); // "2010"


//========================= 연산자 활용하기
//문제: 다음의 산술 연산을 수행하고 결과를 출력하는 코드를 작성하시오.
/*
두 변수 a = 15, b = 4를 선언하고, 다음 결과를 출력하시오:
덧셈
뺄셈
곱셈
나눗셈
나머지
*/
// -- 정답
let a = 15;
let b = 4;

console.log(a + b); // 덧셈: 19
console.log(a - b); // 뺄셈: 11
console.log(a * b); // 곱셈: 60
console.log(a / b); // 나눗셈: 3.75
console.log(a % b); // 나머지: 3

//========================= 비교 연산자 사용하기
/*
다음 조건을 평가하고 결과를 출력하는 코드를 작성하시오.

let a = 10;
let b = 20;
a가 b보다 큰지, 작은지, 같은지를 확인하여 결과를 출력하시오.
*/

let a10 = 10;
let b20 = 20;

if (a10 > b20) {
    console.log("a는 b보다 큽니다.");
} else if (a10 < b20) {
    console.log("a는 b보다 작습니다."); // 이 문장이 실행됩니다.
} else {
    console.log("a와 b는 같습니다.");
}

//========================= 논리 연산자 활용하기
/*
문제: 두 조건 let isMember = true;와 let purchaseAmount = 50;를 사용하여 다음 조건을 평가하는 코드를 작성하시오.
회원인지 확인하고, 구매 금액이 100 이상일 경우 "할인 적용"을 출력하고, 그렇지 않으면 "할인 미적용"을 출력하시오.
*/

//--정답
let isMember = true;
let purchaseAmount = 50;

if (isMember && purchaseAmount >= 100) {
    console.log("할인 적용");
} else {
    console.log("할인 미적용"); // 이 문장이 실행됩니다.
}
