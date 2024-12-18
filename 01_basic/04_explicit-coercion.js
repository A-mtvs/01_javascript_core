/* 
04_explicit-coercion(명시적 타입 변환)
개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(explicit coercion)이라고 한다.
명시적 타입 변환은 주로 내장 함수나 연산자를 활용해 값을 특정 타입으로 변환하며,
타입 변환 결과가 명확히 드러난다. 
*/

/* 01_convert-to-string (문자열 타입으로 변환) */
console.log('===== 명시적 문자열 타입으로 변환 ======');

// 1. String 생성자 함수 사용
console.log(String(10));            // "10"
console.log(String(NaN));           // "NaN"
console.log(String(Infinity));      // "Infinity"
console.log(String(true));          // "true"
console.log(String(false));         // "false"
console.log(String(null));          // "null"
console.log(String(undefined));     // "undefined"
console.log(String({}));            // "[object Object]"
console.log(String([]));            // "" (빈 배열)
console.log(String([1, 2, 3]));     // "1,2,3"

// 2. toString 메서드 사용
console.log((10).toString());       // "10"
console.log((true).toString());     // "true"
console.log(([]).toString());       // "" (빈 배열)
console.log(([1, 2, 3]).toString());// "1,2,3"
// 주의: null과 undefined는 toString 메서드 호출 불가
// console.log(null.toString());    // TypeError
// console.log(undefined.toString());// TypeError

// 3. 문자열 연결 연산자를 이용한 변환
console.log(10 + '');               // "10"

/* 02_convert-to-number (숫자 타입으로 변환) */
console.log('===== 명시적 숫자 타입으로 변환 ======');

// 1. Number 생성자 함수 사용
console.log(Number('0'));           // 0
console.log(Number('-1'));          // -1
console.log(Number('10.5'));        // 10.5
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number(null));          // 0
console.log(Number(undefined));     // NaN
console.log(Number('JavaScript'));  // NaN
console.log(Number([]));            // 0
console.log(Number([1]));           // 1
console.log(Number([1, 2]));        // NaN
console.log(Number({}));            // NaN

// 2. parseInt와 parseFloat 사용
console.log(parseInt('10'));        // 10
console.log(parseInt('10px'));      // 10 (문자 제외 후 숫자 변환)
console.log(parseFloat('10.5px'));  // 10.5

// 3. 단항 + 연산자 사용
console.log(+'10');                 // 10
console.log(+'10.5');               // 10.5
console.log(+true);                 // 1
console.log(+false);                // 0
console.log(+null);                 // 0
console.log(+undefined);            // NaN

/* 03_convert-to-boolean (불리언 타입으로 변환) */
console.log('===== 명시적 불리언 타입으로 변환 ======');

// 1. Boolean 생성자 함수 사용
console.log(Boolean(0));            // false
console.log(Boolean(''));           // false (빈 문자열)
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false
console.log(Boolean(false));        // false
console.log(Boolean(1));            // true
console.log(Boolean('JavaScript'));// true (빈 문자열이 아닌 경우)
console.log(Boolean([]));           // true (빈 배열도 true)
console.log(Boolean({}));           // true (빈 객체도 true)

// 2. 논리 부정 연산자 (!!) 사용
console.log(!!0);                   // false
console.log(!!'');                  // false
console.log(!!'JavaScript');        // true
console.log(!![]);                  // true
console.log(!!{});                  // true
console.log(!!null);                // false

// 불리언 타입으로 변환 시 
// false로 평가되는 값: 0, '', null, undefined, NaN
// 나머지는 모두 true로 평가된다.
