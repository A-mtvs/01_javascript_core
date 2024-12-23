/*
# 문법 설명
1. JSON은 데이터를 키-값 쌍으로 표현하며, 문자열 키는 큰따옴표로 감싼다.
2. `JSON.stringify`는 객체를 JSON 문자열로 변환하며, 서버 전송이나 파일 저장에 사용된다.
3. `JSON.parse`는 JSON 문자열을 객체로 변환하며, 데이터를 쉽게 조작할 수 있다.
*/

/*
# 스토리
한 쇼핑몰에서 고객 데이터를 JSON으로 저장하고 이를 읽어와 가공한다.
JSON을 사용해 데이터를 직렬화하여 서버로 전송하거나, 역직렬화하여 클라이언트에서 처리한다.
*/


/*
# 1. JSON 직렬화
고객 데이터를 JSON 문자열로 변환하여 서버로 전송한다.
*/

const customer = {
    id: 101,
    name: "홍길동",
    purchases: [
        { item: "노트북", price: 1200000 },
        { item: "스마트폰", price: 800000 }
    ]
};

/*
JSON.stringify() 메서드는 자바스크립트 객체를 JSON 문자열로 변환하는 데 사용된다. 
이 메서드는 객체를 직렬화하여 데이터를 전송하거나 저장할 수 있는 형식으로 변환한다.
*/
// 기본 변환
const customerJson = JSON.stringify(customer);
console.log("기본 JSON 문자열:", customerJson);

// 특정 속성만 포함
const limitedJson = JSON.stringify(customer, ['id', 'name']);
console.log("제한된 JSON 문자열:", limitedJson);

// 가독성을 높인 JSON 문자열
const prettyJson = JSON.stringify(customer, null, 2);
console.log("가독성 있는 JSON 문자열:\n", prettyJson);


/*
결과 설명
- 객체가 JSON 문자열로 변환되었다.
- 직렬화된 JSON은 텍스트 형식으로, 서버 전송이나 저장에 적합하다.
*/




/*
# 2. JSON 역직렬화
서버에서 받은 JSON 데이터를 자바스크립트 객체로 변환하여 처리한다.
*/
const serverResponse = `{
    "id": 101,
    "name": "홍길동",
    "purchases": [
        { "item": "노트북", "price": 1200000 },
        { "item": "스마트폰", "price": 800000 }
    ]
}`;

const parsedCustomer = JSON.parse(serverResponse);
console.log("고객 이름:", parsedCustomer.name);
console.log("첫 번째 구매 품목:", parsedCustomer.purchases[0].item);

/*
결과 설명
- JSON 문자열이 자바스크립트 객체로 변환되었다.
- 데이터를 객체로 조작하여 필요한 정보를 추출할 수 있다.
*/

/*
# 3. JSON 활용
고객의 총 구매 금액을 계산한다.
*/
// reduce()는 자바스크립트 배열의 메서드 중 하나로, 배열의 각 요소를 순회하면서 누적 값을 계산하는 데 사용된다
const totalAmount = parsedCustomer.purchases.reduce((sum, purchase) => sum + purchase.price, 0);
/*
sum : 이전에 호출한 반환값을 누적하는 변수
purchase : 현재 처리중인 배열 요소소
*/

console.log(`총 구매 금액: ${totalAmount}원`);

/*
결과 설명
- `reduce` 메서드를 사용해 구매 내역의 총 금액을 계산.
- JSON 데이터가 객체로 변환되었기에 쉽게 데이터 처리 가능.
*/

/*
결론
1. JSON은 객체와 유사한 형식으로 데이터를 교환하거나 저장하는 데 사용된다.
2. `JSON.stringify`와 `JSON.parse`를 활용해 데이터 직렬화 및 역직렬화를 수행.
3. JSON 데이터를 활용하면 서버와 클라이언트 간 효율적인 데이터 처리가 가능하다.
*/
