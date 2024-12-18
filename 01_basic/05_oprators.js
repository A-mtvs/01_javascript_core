/*
연산자
자바스크립트에서 연산자는 값을 조작하고 계산하는 데 사용된다.
*/

/*
1. 산술 연산자 (Arithmetic Operators)
산술 연산자는 숫자 값을 계산하는 데 사용된다.
*/
console.log("=== 산술 연산자 ===");

let a = 10;
let b = 3;

console.log("a + b =", a + b); // 덧셈: 10 + 3 = 13
console.log("a - b =", a - b); // 뺄셈: 10 - 3 = 7
console.log("a * b =", a * b); // 곱셈: 10 * 3 = 30
console.log("a / b =", a / b); // 나눗셈: 10 / 3 = 3.3333...
console.log("a % b =", a % b); // 나머지: 10 % 3 = 1
console.log("a ** b =", a ** b); // 제곱: 10^3 = 1000

/*
2. 대입 연산자의 종류
대입 연산자는 변수에 값을 할당하는 데 사용된다
*/
console.log("\n=== 대입 연산자 ===");

let c = 5;
console.log("초기 c =", c); // 결과: 5

c += 3; // c = c + 3
console.log("c += 3 ->", c); // 결과: 8

c *= 4; // c = c * 4
console.log("c *= 4 ->", c); // 결과: 32

c -= 10; // c = c - 10
console.log("c -= 10 ->", c); // 결과: 22

c /= 2; // c = c / 2
console.log("c /= 2 ->", c); // 결과: 11

c %= 3; // c = c % 3
console.log("c %= 3 ->", c); // 결과: 2

/*
3. 비교 연산자 (Comparison Operators)
비교 연산자는 두 값을 비교하고, 결과를 불리언 값(true 또는 false)으로 반환한다.
*/
console.log("\n=== 비교 연산자 ===");
let x = 10;
let y = '10';

console.log("x == y ->", x == y); // true
console.log("x === y ->", x === y); // false
console.log("x != y ->", x != y); // false
console.log("x !== y ->", x !== y); // true
console.log("x > y ->", x > y); // false
console.log("x >= y ->", x >= y); // true
console.log("x < y ->", x < y); // false
console.log("x <= y ->", x <= y); // true

/*
3. 논리 연산자 (Logical Operators)
논리 연산자는 불리언 값을 조합하거나 반전하는 데 사용된다.
*/
console.log("\n=== 논리 연산자 ===");

let isAdult = true;
let hasID = false;

console.log("isAdult && hasID:", isAdult && hasID); 
// AND 연산: 두 조건이 모두 true여야 true 반환. 결과: false

console.log("isAdult || hasID:", isAdult || hasID); 
// OR 연산: 하나의 조건이라도 true면 true 반환. 결과: true

console.log("!isAdult:", !isAdult); 
// NOT 연산: 조건을 반대로 바꿈. 결과: false