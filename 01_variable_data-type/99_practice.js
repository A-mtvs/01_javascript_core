// 실습 문제

// 문제 1: 변수 선언
// 1. var, let, const의 차이를 이해하고, 아래 코드를 실행하여 결과를 확인하시오.
var globalVar = 10;
let blockLet = 20;
const constantValue = 30;

if (true) {
    var globalVar = 40; // 재선언 가능
    let blockLet = 50;  // 블록 스코프
    // const constantBlock = 60; // 오류 발생
}
console.log("문제 1 결과:", globalVar, blockLet, constantValue); // 40, 20, 30

// 문제 2: 자료형 확인
// 2. 다음 코드의 출력 결과를 예상하시오.
let firstNum = 15;
let secondNum = '25';
let sumResult = firstNum + secondNum; // 암묵적 형변환
console.log("문제 2 결과:", typeof sumResult); // string

// 문제 3: 자료형 변환
// 3. 다음 코드에서 Number(), String(), Boolean()을 사용하여 변환한 결과를 확인하시오.
let stringValue = "456";
let booleanValue = true;
let nullValue = null;

let convertedToNum = Number(stringValue);
let convertedToStr = String(booleanValue);
let convertedToBool = Boolean(nullValue);

console.log("문제 3 결과:", convertedToNum, convertedToStr, convertedToBool); // 456, "true", false

// 문제 4: NaN과 Infinity
// 4. 다음 코드의 결과를 확인하시오.
let divisionByZero = 1 / 0; // Infinity
let undefinedOperation = undefined + 5; // NaN
let notANumber = "text" / 2; // NaN

console.log("문제 4 결과:", divisionByZero, undefinedOperation, notANumber); // Infinity, NaN, NaN
