/*
수업 목표 : 변수가 무엇인지 이해하고 변수 선언과 할당을 적용한다.

Primitive Data Types(원시 자료형)
원시 자료형(Primitive Data Type)은 프로그래밍 언어에서 가장 기본적인 데이터 유형으로,
더 이상 나눌 수 없는 단일 값을 가진다. 


EX) : 
Number	숫자 데이터	10, 3.14, -25
String	문자열 데이터	'Hello', "World"
Boolean	논리 데이터 (참/거짓)	true, false
Null	값이 없음을 나타냄	null
Undefined	변수가 선언되었으나 값이 없음	let a; → a === undefined
*/

/*
변수
변수(variable)는 데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소’이다.
이러한 변수는 원래 메모리라는 공간에 (@550023)와 같이 주소값으로 표시를 해야한다.
그러나 이러한 값으로 변수를 사용하는 것은 매우 어렵기 때문에 이것을 쉽게 표현할 수 있도록
변수명이라는 것을 사용하여 부르게 된다.
즉, 변수명은 프로그램의 메모리와 연결이 되어 있으며 메모리에 데이터가 저장되는 것이다.

변수를 생성할때 우리는 변수를 선언한다고 표현한다.
변수 선언은 다음과 같은 규칙을 갖게된다.

키워드 변수명 = 값
키워드 : 변수의 접근 범위를 지정함.
변수명 : 변수를 부를 이름을 설정함.
= : 대입 연산자로 우항의 값을 좌항에 대입한다.
값 : 변수명에 대입할 값을 입력한다.
*/

// Number : 숫자 형식의 값을 의미한다.
let num = 42;         
console.log(num)

// String : 문자열 형식의 값을 의미한다.
let str = "JavaScript"; 
console.log(str)

// Boolean : 참과 거짓의 값을 의미한다. 
let isTrue = true;     
console.log(isTrue)

// Null : 값이 없다는 것을 의미하며 이는 사용자가 값을 제거하고자 하는 경우 사용한다.
let empty = null;      
console.log(empty)


// Undefined : 변수가 아무런 값을 가지지 않은 상태를 의미한다.
let notAssigned;       
console.log(notAssigned)


