/*
반복문
반복문은 특정 조건이 참일 때, 코드를 반복적으로 실행하는 데 사용된다.
*/

/*
1. for 반복문
반복 횟수가 명확히 정해진 경우에 주로 사용된다.
*/
console.log("=== for 반복문 ===");

for (let i = 1; i <= 5; i++) {
  console.log("i =", i); // i가 1부터 5까지 반복
}

// 배열의 모든 요소를 순회
const fruits = ["사과", "바나나", "체리"];
for (let i = 0; i < fruits.length; i++) {
  console.log("과일:", fruits[i]);
}

// for문에서 조건을 자유롭게 설정 가능
for (let i = 10; i >= 0; i -= 2) {
  console.log("2씩 감소:", i);
}


// ==============================


/*
2. while 반복문
조건이 참인 동안 반복하며, 조건이 거짓이 되면 반복을 멈춘다.
*/
console.log("\n=== while 반복문 ===");

let count = 0;

while (count < 3) {
  console.log("count =", count);
  count++; // 반복 조건을 변경하지 않으면 무한 루프가 발생
}

// 배열의 요소 출력 (while 사용)
const numbers = [10, 20, 30];
let index = 0;
while (index < numbers.length) {
  console.log("배열 요소:", numbers[index]);
  index++;
}


// ==============================


/*
3. do-while 반복문
코드 블록을 먼저 실행한 후 조건을 확인한다.
즉, 조건이 거짓이더라도 코드 블록이 최소 1회 실행된다.
*/
console.log("\n=== do-while 반복문 ===");

let doCount = 0;

do {
  console.log("doCount =", doCount); // 조건 확인 전 코드 실행
  doCount++;
} while (doCount < 3);

// do-while과 while의 차이 비교
let whileNum = 10;
let doWhileNum = 10;

console.log("\n=== while과 do-while의 차이 ===");

// while 반복문: 조건이 거짓이면 실행되지 않음
while (whileNum < 10) {
  console.log("whileNum 실행됨");
}

// do-while 반복문: 조건이 거짓이어도 최소 1회 실행됨
do {
  console.log("doWhileNum 실행됨");
} while (doWhileNum < 10);


// ==============================


/*
4. 중첩 반복문
반복문 안에 반복문을 사용하는 경우.
*/
console.log("\n=== 중첩 반복문 ===");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`); // 1부터 3까지의 숫자와 1부터 2까지의 조합
  }
}


