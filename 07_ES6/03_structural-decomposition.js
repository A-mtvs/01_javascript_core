/*
# 문법 설명
1. 배열 구조 분해는 배열의 각 요소를 변수에 순서대로 할당.
2. 객체 구조 분해는 객체의 속성 이름을 기준으로 값을 변수에 할당.
3. 기본값을 설정하거나 나머지 값을 묶어 관리할 수 있다.
*/

/*
# 스토리
한 스타트업이 직원 데이터와 프로젝트 데이터를 관리한다.
- 배열 구조 분해로 직원 목록에서 개별 이름을 추출한다.
- 객체 구조 분해로 프로젝트 정보를 개별 변수에 담아 작업한다.
*/


/*
# 1. 배열 구조 분해
직원 목록에서 이름을 개별 변수로 추출.
*/
const employees = ["홍길동", "이영희", "김철수"];
const [firstEmployee, secondEmployee, thirdEmployee] = employees;

console.log(firstEmployee); // 홍길동
console.log(secondEmployee); // 이영희
console.log(thirdEmployee); // 김철수

/*
결과 설명
- 배열 `employees`의 각 요소를 변수에 순서대로 할당.
- 각 직원의 이름을 개별 변수로 분리하여 활용 가능.
*/

/*
# 2. 객체 구조 분해
프로젝트 정보를 개별 변수로 추출.
*/
const project = { title: "AI 개발", duration: "6개월", team: "AI Lab" };
const { title, duration, team } = project;

console.log(`프로젝트: ${title}`); // 프로젝트: AI 개발
console.log(`기간: ${duration}`); // 기간: 6개월
console.log(`팀: ${team}`); // 팀: AI Lab

/*
결과 설명
- 객체 `project`의 속성을 변수로 분리해 사용.
- 변수 이름은 속성 이름과 일치해야 한다.
*/

/*
# 3. 나머지 값 처리
나머지 요소를 별도로 저장.
*/
const [teamLeader, ...otherEmployees] = employees;

console.log(teamLeader); // 홍길동
console.log(otherEmployees); // [이영희, 김철수]

const { title: projectTitle, ...otherDetails } = project;

console.log(projectTitle); // AI 개발
console.log(otherDetails); // { duration: '6개월', team: 'AI Lab' }

/*
결과 설명
- 배열의 나머지 요소는 `...`을 사용해 새로운 배열에 저장.
- 객체의 나머지 속성도 `...`을 사용해 별도로 관리 가능.
*/

/*
결론
1. 구조 분해 할당은 데이터를 효율적으로 다룰 수 있게 한다.
2. 배열은 순서대로, 객체는 속성 이름을 기준으로 값을 분리한다.
3. 기본값 설정 및 나머지 값 처리를 통해 복잡한 데이터도 간단히 관리 가능.
*/
