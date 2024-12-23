/*
# 문법 설명
1. 배열이나 객체를 복사할 때 스프레드 연산자를 사용하면 원본 데이터가 변경되지 않는다.
2. 배열이나 객체를 병합할 때 각 요소나 속성을 펼쳐 결합한다.
3. 구조 분해 할당과 결합해 데이터를 효율적으로 처리할 수 있다.
*/

/*
# 스토리
한 전자 상거래 웹사이트에서 고객과 주문 데이터를 관리한다.
- 고객 데이터를 업데이트하면서 기존 정보를 유지한다.
- 주문 목록을 결합하거나 필터링하여 데이터를 처리한다.
*/


/*
# 1. 배열 복사와 병합
기존 주문 목록에 새 주문을 추가한다.
*/
const orders = ["노트북", "스마트폰"];
const newOrders = [...orders, "태블릿", "모니터"];
console.log(newOrders);

/*
결과 설명
- 기존 배열 `orders`는 변경되지 않고, 새로운 배열 `newOrders`가 생성된다.
- 스프레드 연산자를 사용해 새로운 데이터를 병합.
*/

/*
# 2. 객체 복사와 병합
고객 정보를 업데이트하며 기존 정보를 유지한다.
*/
const customer = { name: "이영희", age: 25 };
const updatedCustomer = { ...customer, email: "younghee@example.com" };
console.log(updatedCustomer);

/*
결과 설명
- 원본 객체 `customer`는 변경되지 않고, 새로운 객체 `updatedCustomer`가 생성된다.
- 기존 데이터와 새 데이터를 결합해 업데이트한다.
*/

/*
# 3. 구조 분해 할당과 스프레드 연산자
구조 분해 할당으로 배열의 특정 요소를 분리한 뒤, 나머지 요소를 새로운 배열로 만든다.
*/
const [firstOrder, ...remainingOrders] = newOrders;
console.log(firstOrder); // 노트북
console.log(remainingOrders); // [스마트폰, 태블릿, 모니터]

/*
결과 설명
- 구조 분해 할당과 스프레드 연산자를 결합해 데이터를 분리하고 관리.
- 첫 번째 주문을 별도로 처리하거나, 나머지 주문을 별도로 관리할 수 있다.
*/

/*
# 4. 배열 데이터 병합 및 중복 제거
중복된 데이터를 병합한 후, 중복을 제거한다.
*/
const moreOrders = ["스마트폰", "이어폰"];
const mergedOrders = [...newOrders, ...moreOrders];
const uniqueOrders = [...new Set(mergedOrders)];
console.log(uniqueOrders);

/*
결과 설명
- 스프레드 연산자로 배열을 병합한 후, `Set`을 사용해 중복을 제거.
- 결과는 중복되지 않은 고유한 주문 목록이 된다.
*/

/*
결론
1. 스프레드 연산자는 복사와 병합을 간결하게 처리하며 원본 데이터를 보호.
2. 배열과 객체를 다루는 다양한 상황에서 효율성을 제공.
3. 구조 분해 할당과 결합해 데이터를 관리하고 분리하는 데 유용.
*/
