/* 
03_implicit-coercion(암묵적 타입 변환)
개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(explicit coercion)이라고 하며
자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환 되는 것을 암묵적 타입 변환(implicit coercion)이라고 한다.
명시적 타입 변환은 코드에서 드러나지만 암묵적 타입 변환은 드러나지 않으므로
타입 변환 된 결과를 예측할 수 있어야 오류를 방지할 수 있다.
*/


/* 01_convert-to-string (문자열 타입으로 변환) */
// 문자열과 "+" 연산자가 함께 사용될 때, 숫자는 문자열로 변환된다.
console.log('===== 문자열 타입으로 변환 ======');

// 문자열 연결 연산자로 동작 
// 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적으로 변환
console.log(10 + '20');

// 템플릿 리터럴 표현식 삽입은 표현식의 결과를 문자열 타입으로 암묵적으로 변환
console.log(`10 + 20 : ${10 + 20}`);

// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과
console.log(1 + '');                // "1"
console.log(NaN + '');              // "NaN"
console.log(Infinity + '');         // "Infinity"
console.log(true + '');             // "true"
console.log(null + '');             // "null"
console.log(undefined + '');        // "undefined"
console.log({} + '');               // 객체 - "[object Object]"
console.log([] + '');               // 배열 - ""
console.log(function(){} + '');     // 함수 - "function(){}"




/* 02_convert-to-number (숫자 타입으로 변환) */
console.log('===== 숫자 타입으로 변환 ======');

// 산술 연산자의 피연산자는 모두 숫자여야하므로 
// 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 - '5');              // 5
console.log(10 * '5');              // 50
console.log(10 / '5');              // 2
console.log(10 % 'JavaScript');     // NaN - 피연산자 숫자 변환 불가로 연산 수행 불가

// 비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로
// 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 > '5');

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');                   // 0
console.log(+'1');                  // 1
console.log(+'JavaScript');         // NaN
console.log(+true);                 // 1
console.log(+false);                // 0
console.log(+null);                 // 0
console.log(+undefined);            // NaN
console.log(+{});                   // NaN
console.log(+[]);                   // 0
console.log(+function(){});         // NaN

// 빈 문자열, 빈 배열, null, false는 0으로 true는 1로 변환
// 객체와 undefined는 변환되지 않아 NaN

