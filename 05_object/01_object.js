
/*
# 문법 설명
1. 객체 리터럴은 `{}`를 사용하며, 키-값 쌍으로 데이터를 정의한다.
2. 속성 접근은 `.` 표기법 또는 `[]` 표기법을 사용한다.
3. 속성을 동적으로 추가할 때는 `객체.속성 = 값` 또는 `객체["속성"] = 값`을 사용한다.
4. 속성을 삭제할 때는 `delete 객체.속성`을 사용한다.
*/

/*
# 스토리
한 마을의 주민 정보를 관리하는 시스템이 있다. 주민의 이름, 나이, 직업 정보를 객체로 저장하고, 새 주민이 등록되거나 기존 주민의 정보를 삭제하는 작업을 수행한다.
*/


/*
# 1. 객체 생성과 기본 속성 접근
마을 주민 정보를 객체로 정의하고 속성에 접근한다.
*/
const resident = { name: "김철수", age: 40, occupation: "농부" };

console.log(`이름: ${resident.name}`);
console.log(`나이: ${resident.age}`);
console.log(`직업: ${resident.occupation}`);

/*
결과 설명
- 객체 `resident`는 주민 정보를 저장하며, 각 속성은 이름, 나이, 직업을 나타낸다.
- `.` 표기법을 사용해 속성에 접근할 수 있다.
*/




/*
# 2. 속성 동적 추가
새로운 속성을 추가해 주민 정보를 확장한다.
*/
resident.address = "서울시 강남구";
console.log(`주소: ${resident.address}`);

/*
결과 설명
- `address` 속성이 추가되며, 객체는 새로운 데이터를 동적으로 저장할 수 있다.
*/



/*
# 3. 속성 삭제
기존 속성을 삭제하여 데이터를 관리한다.
*/
delete resident.occupation;
console.log(resident);

/*
결과 설명
- `occupation` 속성이 삭제되며, 객체에서 더 이상 해당 데이터를 참조할 수 없다.
*/




/*
# 4. 객체 배열을 사용한 여러 주민 관리
마을의 여러 주민 정보를 객체 배열로 관리한다.
*/
const residents = [
    { name: "김철수", age: 40, occupation: "농부" },
    { name: "이영희", age: 35, occupation: "상인" },
    { name: "박철호", age: 28, occupation: "어부" }
];

// 모든 주민 정보 출력
residents.forEach((resident) => {
    console.log(`${resident.name} - 나이: ${resident.age}, 직업: ${resident.occupation}`);
});

/*
결과 설명
- 배열과 객체를 결합해 여러 주민 정보를 효율적으로 관리.
- `forEach` 메서드를 통해 배열의 각 객체를 순회하며 정보를 출력.
*/




/*
# 5. 주민 추가와 삭제
새로운 주민을 추가하고 기존 주민을 삭제한다.
*/
residents.push({ name: "최은희", age: 22, occupation: "교사" }); // 새 주민 추가
residents.splice(1, 1); // 두 번째 주민 삭제

console.log("최종 주민 목록:");
residents.forEach((resident) => {
    console.log(`${resident.name} - 나이: ${resident.age}, 직업: ${resident.occupation}`);
});

/*
결과 설명
- `push` 메서드를 사용해 배열에 새로운 객체를 추가.
- `splice` 메서드를 통해 특정 인덱스의 객체를 삭제.
*/




/*
결론
1. 객체는 데이터를 키-값 쌍으로 저장하며, 동적으로 속성을 추가하거나 삭제 가능.
2. 배열과 결합해 다수의 객체를 관리하며 데이터를 효율적으로 처리 가능.
3. 다양한 메서드와 결합해 데이터를 유연하게 조작할 수 있다.
*/
