/*
문법 설명
setTimeout(callback, delay): 지정한 시간이 지난 후 콜백 함수를 실행한다.
addEventListener(event, callback): 지정한 이벤트가 발생했을 때 콜백 함수를 실행한다.
비동기 처리는 작업을 나중에 실행하므로 프로그램이 멈추지 않고 다른 작업을 계속 진행한다.
*/

/*
스토리
"배달 트래커"
한 배달 서비스는 고객의 주문 상태를 실시간으로 업데이트한다.

특정 시간이 지나면 상태가 자동으로 업데이트된다.
상태 변경 후에 배달 완료 메시지가 출력된다.
동시에 여러 배달의 상태를 관리할 수 있다.
*/


/*
1. setTimeout으로 배달 상태 업데이트
배달 상태를 특정 시간이 지난 후 업데이트한다.
*/
function updateOrderStatus(orderId, status, delay) {
    console.log(`주문 ${orderId} 상태 업데이트 예약: ${delay / 1000}초 후 "${status}"`);
    setTimeout(() => {
        console.log(`주문 ${orderId} 상태: ${status}`);
    }, delay);
}

// 실행
updateOrderStatus(101, "조리 중", 2000);
updateOrderStatus(102, "배달 중", 4000);

/*
결과 설명
- `setTimeout`은 지정한 시간이 지난 후 상태 업데이트를 출력한다.
- 각각의 주문 상태는 독립적으로 관리된다.
*/




/*
2. 콜백을 활용한 배달 완료 메시지 출력
상태 변경 후 배달 완료 메시지를 출력한다.
*/

function updateOrderWithCallback(orderId, delay, callback) {
    console.log(`주문 ${orderId} 업데이트 중...`);
    setTimeout(() => {
        console.log(`주문 ${orderId} 상태: 배달 완료`);
        callback(orderId);
    }, delay);
}

updateOrderWithCallback(103, 5000, (orderId) => {
    console.log(`주문 ${orderId}에 대한 감사 메시지를 보냈습니다.`);
});

/*
결과 설명
- 상태 변경 후 콜백 함수가 호출되어 추가 작업(감사 메시지 출력)을 수행한다.
*/


/*
3. 다중 배달 상태 업데이트
여러 주문의 상태를 동시에 관리한다.
*/

function manageMultipleOrders(orders) {
    orders.forEach((order) => {
        updateOrderWithCallback(order.id, order.delay, (orderId) => {
            console.log(`주문 ${orderId}이 최종 완료되었습니다.`);
        });
    });
}

// 실행
const orderList = [
    { id: 104, delay: 2000 },
    { id: 105, delay: 3000 },
    { id: 106, delay: 4000 }
];

manageMultipleOrders(orderList);

/*
결과 설명
- 각 주문의 상태가 비동기로 관리되며, 최종 완료 메시지가 출력된다.
*/





/*
4. 콜백 지옥 예제와 해결
비동기 프로그래밍에서 발생하는 문제로, 
여러 개의 비동기 작업이 서로 연결되어 실행될 때 콜백 함수가 중첩되어 가독성이 떨어지는 상태를 의미한다.
*/
function updateOrderStatusSequentially(orderId) {
    console.log(`주문 ${orderId} 처리 시작...`);
    setTimeout(() => {
        console.log(`주문 ${orderId} 상태: 조리 중`);
        setTimeout(() => {
            console.log(`주문 ${orderId} 상태: 배달 중`);
            setTimeout(() => {
                console.log(`주문 ${orderId} 상태: 배달 완료`);
            }, 2000);
        }, 2000);
    }, 2000);
}

updateOrderStatusSequentially(107);

/*
결과 설명
- 콜백 함수가 중첩되어 코드의 가독성이 떨어지는 콜백 지옥 현상을 보여준다.
*/
