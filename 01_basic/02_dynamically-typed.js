/*
수업 목표 : 자바스크립트의 동적 타입을 이해한다.

정적 타입(static/strong type) 언어(C, C++, Java, Kotlin 등)
변수를 선언할 때 데이터 타입을 사전에 선언(명시적 타입 선언)해야 한다.
변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.
컴파일 시점에 타입 체크를 수행하는데 타입의 일관성을 강제하여 런타임 에러를 줄인다.

동적 타입(dynamic/weak type) 언어(JavaScript, Python 등)
자바스크립트는 var, let, const 키워드를 사용해 변수를 선언할 뿐 데이터 타입을 사전에 선언하지 않는다.
즉, 동적 타입 언어는 변수 선언이 아닌 할당에 의해 타입이 결정(타입 추론)되며 
재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
변수의 값이 언제든지 변경 될 수 있기 때문에 값을 확인하기 전에는 타입을 확신할 수 없다. 
개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.
즉, 유연성은 높지만 신뢰성은 떨어진다.
이로 인해 변수를 사용하기 전 데이터 타입 체크를 하기도 하는데 이는 번거롭기도 하고 코드의 양도 증가한다.  
*/

// typeof 연산자로 변수에 할당된 값의 데이터 타입을 반환한다.

// let이라는 키워드를 사용하여 test 변수를 선언한다.
// 현재의 변수에는 아무런 값도 담기지 않는다.
let test; 
console.log(typeof test); // undefined

// test 변수에 숫자 1의 값을 할당한다. 
test = 1;
console.log(typeof test); // number
// 위에서는 값이 아무런 값도 존재하지 않는 undefined로 할당되었으나
// 1의 값을 할당 함으로써 number라는 타입을 갖게된다.

// 이제 test 변수에 문자열 값을 할당한다.
test = "Hello, World!";
console.log(typeof test); // string
// test 변수는 이제 string 타입을 갖는다.

// test 변수에 불리언 값을 할당한다.
test = true;
console.log(typeof test); // boolean
// test 변수는 이제 boolean 타입을 갖는다.

// test 변수에 null 값을 할당한다.
test = null;
console.log(typeof test); // object
// null은 특별한 값으로, typeof 연산자는 이를 object로 반환한다.


// 아래의 내용은 이후 자세하게 다룬다.

// test 변수에 객체를 할당한다.
test = { name: "Alice", age: 25 };
console.log(typeof test); // object
// test 변수는 이제 object 타입을 갖는다.

// test 변수에 배열을 할당한다.
test = [1, 2, 3, 4, 5];
console.log(typeof test); // object
// 배열도 객체의 한 종류로, typeof는 이를 object로 반환한다.

// 마지막으로, test 변수에 함수를 할당한다.
test = function() {
    return "Hello from the function!";
};
console.log(typeof test); // function
// 함수는 특별한 객체로, typeof는 이를 function으로 반환한다.


