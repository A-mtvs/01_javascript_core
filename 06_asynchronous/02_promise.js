/*
# 문법 설명
1. `Promise` 생성자는 비동기 작업을 캡슐화한다.
2. `resolve`는 작업 성공 시 값을 반환한다.
3. `reject`는 작업 실패 시 에러를 반환한다.
*/

/*
# 스토리
가상의 식당에서 주문을 처리하는 시스템을 구현한다.
- 고객이 음식을 주문하면 조리가 시작된다.
- 조리가 성공하면 고객에게 음식이 전달된다.
- 조리가 실패하면 에러 메시지가 전달된다.
*/


/*
# 1. 기본 Promise 사용
주문을 처리하여 결과를 반환한다.
*/
const processOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        console.log(`주문 ${orderId} 조리 중...`);
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% 확률로 성공
            if (success) {
                resolve(`주문 ${orderId}이(가) 준비되었습니다.`);
            } else {
                reject(`주문 ${orderId} 조리 실패.`);
            }
        }, 2000);
    });
};

processOrder(101)
    .then((message) => console.log(message)) // 성공 메시지 출력
    .catch((error) => console.error(error)); // 에러 메시지 출력

/*
결과 설명
- `processOrder`는 주문 ID를 입력받아 조리 상태를 관리.
- `resolve`로 성공 메시지를 반환하거나, `reject`로 실패 메시지를 반환.
- 2초 후 조리 상태를 출력.
*/




/*
# 2. 체이닝으로 추가 작업 처리
조리 성공 후 고객에게 알림 메시지를 전송한다.
*/
processOrder(102)
    .then((message) => {
        console.log(message);
        return "고객님, 이용해 주셔서 감사합니다.";
    })
    .then((thankYouMessage) => console.log(thankYouMessage))
    .catch((error) => console.error(error));

/*
결과 설명
- 첫 번째 `then`에서 성공 메시지 출력.
- 두 번째 `then`에서 감사 메시지를 출력.
- 실패 시 `catch`에서 에러 메시지 처리.
*/




/*
# 3. 여러 주문 처리
여러 주문을 동시에 처리하고, 모든 주문이 완료되면 알림을 출력한다.
*/
const orders = [201, 202, 203].map((id) => processOrder(id));

Promise.all(orders)
    .then((results) => {
        console.log("모든 주문이 성공적으로 처리되었습니다.");
        console.log(results);
    })
    .catch((error) => {
        console.error("일부 주문 처리 중 에러 발생:", error);
    });

/*
결과 설명
- `Promise.all`은 모든 주문이 성공하면 결과 배열을 반환.
- 하나라도 실패하면 `catch`로 에러를 반환.
*/

/*
결론
1. Promise는 비동기 작업의 성공과 실패를 관리한다.
2. `then`과 `catch`로 작업 결과와 에러를 처리할 수 있다.
3. `Promise.all`은 여러 작업을 병렬로 처리하고, 전체 상태를 관리한다.
*/
