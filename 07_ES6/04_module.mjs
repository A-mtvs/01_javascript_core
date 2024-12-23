/*
# 문법 설명
1. `export`를 사용해 변수, 함수, 클래스 등을 외부로 내보낼 수 있다.
2. `import`를 사용해 다른 파일에서 내보낸 모듈을 가져올 수 있다.
3. `default export`는 파일당 하나만 사용할 수 있으며, 이름 없이 내보낼 수 있다.
*/

/*
# 스토리
한 마을에 여러 장인이 있다. 각 장인은 자신의 작업물을 별도의 파일로 제공하며, 다른 장인들이 이를 가져다 사용할 수 있다.
*/

/*
# 1. 기본 사용: 내보내기와 가져오기
*/
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

/*
결과 설명
- moduleA.js 파일에서 `add`와 `subtract`를 내보내고, main.js에서 이를 가져와 사용.
- 모듈화를 통해 각 기능을 독립적으로 관리 가능.
*/




/*
# 2. Default Export: 기본 값 내보내기
*/
const multiply = (a, b) => a * b;
export default multiply;



/*
결과 설명
- `default export`로 내보낸 모듈은 이름 없이 가져올 수 있다.
- 한 파일에 하나의 `default export`만 존재 가능.
*/


/*
# 3. 모듈 병합: 여러 모듈 통합
*/
export const greet = (name) => `Hi, ${name}!`;
export const farewell = (name) => `Goodbye, ${name}!`;

/*
결과 설명
- `* as`를 사용해 모든 모듈을 가져와 통합적으로 관리.
- 모듈 이름으로 각 기능을 명시적으로 호출 가능.
*/

