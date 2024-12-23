/*
문법 설명
1. 콜백 함수는 다른 함수에 전달되어 실행되는 함수다.
2. 고차 함수는 콜백 함수를 인수로 받거나 다른 함수를 반환하는 함수다.
3. 콜백 함수는 비동기 작업에서 결과를 처리하거나 이벤트 기반 시스템에서 자주 사용된다.
*/

/*
스토리
"마을의 알림 시스템"
마을 사람들이 서로 정보를 공유하기 위해 알림 시스템을 개발한다. 마을의 주요 이벤트 발생 시, 알림이 사용자에게 전달되며, 각각의 알림은 콜백 함수로 정의되어 상황에 따라 다른 동작을 수행한다.
*/

/*
1. 기본 콜백 함수 활용
마을에서 이벤트가 발생하면 알림을 출력한다.
*/

function triggerEvent(eventName, callback) {
    console.log(`이벤트: ${eventName} 시작됨`);
    callback(eventName); // 이벤트 발생 후 콜백 실행
    console.log(`이벤트: ${eventName} 종료됨`);
}

function displayNotification(eventName) {
    console.log(`알림: ${eventName} 이벤트가 발생했습니다!`);
}

// 실행
triggerEvent("시장 개장", displayNotification);

/*
결과 설명
- triggerEvent는 이벤트를 시작하고 종료하며, 콜백 함수로 알림을 전달한다.
- 이벤트 이름은 콜백 함수에 전달되어 알림 메시지에 포함된다.
*/


/*
2. 데이터 처리와 콜백
주문 데이터를 처리한 후 결과를 출력한다.
*/

function processOrders(orders, callback) {
    console.log("주문 처리 중...");

    // 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성한다. 
    // 원본 배열은 변하지 않으며, map 함수는 항상 새로운 배열을 반환 
    const processedOrders = orders.map(order => ({
        ...order,
        status: "완료"
    }));
    callback(processedOrders); // 처리 결과를 콜백으로 전달
}

function notifyCompletion(processedOrders) {
    console.log("처리된 주문 목록:", processedOrders);
}

// 실행
const orders = [
    { orderId: 1, item: "빵" },
    { orderId: 2, item: "우유" }
];

processOrders(orders, notifyCompletion);

/*
결과 설명
- processOrders 함수는 데이터를 처리하고 결과를 notifyCompletion 콜백으로 전달한다.
- 콜백 함수는 처리된 결과를 출력한다.
*/


/*
3. 비동기 작업과 콜백
타이머를 설정하고 일정 시간이 지난 후 알림을 출력한다.
*/

function setReminder(message, delay, callback) {
    console.log(`알림 예약: "${message}" (${delay}ms 후)`);
    setTimeout(() => {
        callback(message); // 지연 후 콜백 실행
    }, delay);
}

function showReminder(message) {
    console.log(`알림: ${message}`);
}

// 실행
setReminder("회의 시작", 2000, showReminder);
setReminder("점심시간", 5000, showReminder);

/*
결과 설명
- setReminder는 지연 시간을 설정하고, 시간이 지나면 콜백으로 알림을 출력한다.
- 각 알림은 설정된 지연 시간 후 실행된다.
*/


/*
4. 다중 이벤트 처리
다수의 이벤트를 순차적으로 처리한다.
*/
function performEvents(events, callback) {
    // forEach 메서드는 자바스크립트 배열의 메서드 중 하나로, 배열의 각 요소에 대해 제공된 함수를 실행한다. 
    // 주로 배열을 순회하며 각 요소에 대해 특정 작업을 수행할 때 사용된다.
    events.forEach((event, index) => {
        setTimeout(() => {
            console.log(`이벤트 ${index + 1}: ${event} 시작`);
            callback(event); // 각 이벤트에 대해 콜백 실행
        }, (index + 1) * 2000);
    });
}

function handleEvent(eventName) {
    console.log(`알림: ${eventName} 이벤트가 완료되었습니다.`);
}

// 실행
const events = ["시장 개장", "음악 축제", "불꽃놀이"];
performEvents(events, handleEvent);

/*
결과 설명
- performEvents는 각 이벤트를 2초 간격으로 처리하며, 콜백 함수로 알림을 출력한다.
*/
