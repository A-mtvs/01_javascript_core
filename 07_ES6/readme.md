# ES6 (ECMAScript 2015)
ES6, 또는 ECMAScript 2015는 자바스크립트의 주요 업데이트 중 하나로, 새로운 기능과 문법을 추가하여 개발자들이 더 간결하고 효율적인 코드를 작성할 수 있도록 돕는다. ES6는 자바스크립트의 발전에 중요한 기여를 했으며, 이후 버전들도 그 기반 위에 발전해왔다.

## 주요 기능
1. let과 const<br>
    - **let**: 블록 범위 변수를 선언할 수 있다. 기존의 `var` 키워드보다 더 안전하게 변수를 관리할 수 있다.
    
        ```javascript
        let x = 10;
        if (true) {
            let x = 20; // 블록 범위
            console.log(x); // 20
        }
        console.log(x); // 10
        ```

    - const: 상수를 선언할 때 사용합니다. 재할당이 불가능하다.
        ```js
        const PI = 3.14;
        // PI = 3.15; // 오류 발생
        ```

2. 화살표 함수 (Arrow Functions)<br>
화살표 함수는 더 간결한 문법으로 함수를 정의할 수 있게 해준다. this 바인딩이 lexically(정적으로) 결정된된다.
    ```js
    const add = (a, b) => a + b;
    console.log(add(2, 3)); // 5
    ```

3. 템플릿 리터럴 (Template Literals)<br>
템플릿 리터럴은 문자열을 더 쉽게 작성할 수 있게 해주며, 다중 행 문자열과 문자열 보간 기능을 지원한다.
    ```javascript
    const name = "홍길동";
    const greeting = `안녕하세요, ${name}!`;
    console.log(greeting); // 안녕하세요, 홍길동!
    ```

4. 디스트럭처링 할당 (Destructuring Assignment)<br>
배열이나 객체에서 값을 쉽게 추출할 수 있는 문법이다.
    ```javascript
    const arr = [1, 2, 3];
    const [a, b] = arr;
    console.log(a, b); // 1 2

    const obj = { x: 1, y: 2 };
    const { x, y } = obj;
    console.log(x, y); // 1 2
    ```

5. 모듈 (Modules)<br>
ES6는 모듈 시스템을 도입하여 코드의 재사용성과 유지보수성을 높였다. import와 export 키워드를 사용하여 모듈을 정의하고 사용할 수 있다.
    ```javascript
    // module.js
    export const PI = 3.14;
    export function add(a, b) {
        return a + b;
    }

    // main.js
    import { PI, add } from './module.js';
    console.log(PI); // 3.14
    console.log(add(2, 3)); // 5
    ```

6. 프로미스 (Promises)<br>
비동기 작업을 더 쉽게 처리할 수 있도록 도와주는 객체이다. 프로미스를 사용하면 비동기 작업의 결과를 처리하는 코드를 더 깔끔하게 작성할 수 있다.
    ```javascript
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("데이터 수신 완료");
            }, 1000);
        });
    };

    fetchData().then(data => console.log(data)); // 1초 후 "데이터 수신 완료"
    ```


7. 클래스 (Classes)<br>
ES6는 객체 지향 프로그래밍을 지원하기 위해 클래스 문법을 도입했다. 이를 통해 객체의 구조와 동작을 정의할 수 있다.

    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`안녕하세요, 저는 ${this.name}입니다.`);
        }
    }

    const person = new Person("홍길동", 30);
    person.greet(); // 안녕하세요, 저는 홍길동입니다.
    ```

#### 결론
ES6는 자바스크립트의 기능을 크게 확장시켰으며, 현대 웹 개발에서 필수적인 요소로 자리 잡았다. 위의 기능들은 개발자들이 더 깔끔하고 효율적인 코드를 작성할 수 있도록 돕는 도구이다. ES6의 새로운 문법과 기능들을 활용하여 더욱 생산적인 개발 환경을 구축할 수 있다.


-----

## 템플릿 리터럴
템플릿 리터럴은 ES6에서 도입된 문자열을 표현하는 새로운 방식이다. 백틱(```)을 사용하며, 문자열 내에서 표현식을 삽입하거나 여러 줄 문자열을 쉽게 작성할 수 있다.

## 표현식
```js
// 템플릿 리터럴 기본 사용법
const name = "홍길동";
const greeting = `안녕하세요, ${name}님!`;
console.log(greeting); // 출력: 안녕하세요, 홍길동님!
```


----

# 스프레드 연산자
## 개념 설명
스프레드 연산자는 배열이나 객체의 요소를 펼쳐서 복사하거나 병합할 때 사용된다. `...` 연산자로 표현되며, 데이터를 간결하고 효율적으로 처리할 수 있다.

## 표현식
```js
// 배열 복사와 병합
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// 객체 복사와 병합
const obj1 = { name: "홍길동", age: 30 };
const obj2 = { ...obj1, job: "개발자" };
console.log(obj2); // { name: "홍길동", age: 30, job: "개발자" }
```

----

## 구조 분해 할당
구조 분해 할당은 배열이나 객체의 값을 개별 변수로 쉽게 추출할 수 있게 한다. 데이터를 효율적으로 다루기 위해 사용되며, 배열은 순서대로, 객체는 속성 이름으로 값을 할당한다.

## 표현식
```js
// 배열 구조 분해
const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1, 2, 3

// 객체 구조 분해
const { name, age } = { name: "홍길동", age: 25 };
console.log(name, age); // 홍길동, 25
```


---

## 모듈화 기초
모듈화는 코드를 작은 단위로 분리하고, 필요한 부분만 가져와 재사용하는 기법이다. `import`와 `export`를 사용하여 자바스크립트에서 모듈 간의 의존성을 관리한다. 모듈화는 코드의 재사용성과 유지보수성을 높인다.

## 표현식
```js
// export (파일 내보내기)
export const greet = (name) => `Hello, ${name}!`;

// import (파일 가져오기)
import { greet } from './module.js';
console.log(greet('John')); // Hello, John!
```