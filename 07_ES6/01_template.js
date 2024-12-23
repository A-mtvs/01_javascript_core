/*
# 문법 설명
1. **백틱(```)**을 사용해 문자열을 감싼다.
2. `${}`를 사용해 문자열 내에 표현식을 삽입할 수 있다.
3. 여러 줄 문자열을 간단히 작성할 수 있다.
*/

/*
# 스토리
한 쇼핑몰에서 고객에게 맞춤형 메시지를 보낸다.
- 고객의 이름과 주문 내역을 포함한 메시지를 생성한다.
- 템플릿 리터럴을 사용해 코드를 간결하게 작성한다.
*/

/*
# 실습 코드
*/

/*
# 1. 기본 사용: 고객 맞춤 메시지 생성
고객의 이름과 구매 정보를 포함한 메시지를 작성한다.
*/
const customerName = "홍길동";
const orderItem = "노트북";
const orderPrice = 1200000;

const message = `안녕하세요, ${customerName}님.
주문하신 ${orderItem}의 가격은 ${orderPrice.toLocaleString()}원입니다.
감사합니다.`;

console.log(message);

/*
결과 설명
- 템플릿 리터럴로 고객 정보를 포함한 메시지를 작성.
- `${}`로 변수와 표현식을 삽입해 가독성을 높임.
*/

/*
# 2. 다중 줄 문자열
긴 문자열을 줄바꿈 없이 작성한다.
*/
const longText = `템플릿 리터럴을 사용하면 
줄바꿈 문자를 직접 삽입하지 않고도 
여러 줄에 걸친 문자열을 작성할 수 있습니다.`;

console.log(longText);

/*
결과 설명
- 템플릿 리터럴은 백틱 내에서 줄바꿈을 허용.
- 코드 작성이 간단하며, 긴 문자열 처리에 유리.
*/

/*
# 3. 태그드 템플릿(Tag Template) 활용
태그 함수를 사용해 템플릿 리터럴을 커스터마이징한다.
*/
function formatMessage(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return `${result}${str}${values[i] ? `<b>${values[i]}</b>` : ""}`;
    }, "");
}

const taggedMessage = formatMessage`안녕하세요, ${customerName}님.
주문하신 ${orderItem}의 가격은 ${orderPrice.toLocaleString()}원입니다.`;

console.log(taggedMessage);

/*
결과 설명
- 태그 함수는 템플릿 리터럴의 문자열과 표현식을 분리해 처리.
- 템플릿 리터럴을 동적으로 변환하거나 포맷팅 가능.
*/

/*
# 4. 배열 데이터와 템플릿 리터럴
여러 고객의 정보를 리스트로 출력한다.
*/
const customers = [
    { name: "김철수", item: "스마트폰", price: 800000 },
    { name: "이영희", item: "태블릿", price: 600000 },
];

const customerMessages = customers.map(
    (customer) =>
        `안녕하세요, ${customer.name}님.
주문하신 ${customer.item}의 가격은 ${customer.price.toLocaleString()}원입니다.`
);

console.log(customerMessages.join("\n\n"));

/*
결과 설명
- 배열 데이터를 템플릿 리터럴과 결합해 동적으로 문자열 생성.
- `map` 메서드와 템플릿 리터럴로 반복적인 작업을 간결히 처리.
*/

/*
결론
1. 템플릿 리터럴은 문자열 작업을 간결하고 가독성 있게 만든다.
2. 태그드 템플릿은 템플릿 리터럴을 동적으로 처리하는 강력한 도구이다.
3. 배열과 결합해 반복적인 문자열 작업을 효율적으로 처리할 수 있다.
*/
