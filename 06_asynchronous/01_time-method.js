/*
# 문법 설명
1. `setTimeout`은 일정 시간 후 콜백 함수를 실행한다.
2. `setInterval`은 일정 시간 간격으로 콜백 함수를 반복 실행한다.
3. `clearTimeout`과 `clearInterval`로 타이머를 중지할 수 있다.
*/

/*
# 스토리
한 마을에 매일 정각마다 종을 울리는 시스템이 있다. 이 시스템은 종을 울리기 위해 설정된 타이머를 사용하며, 특정 시간마다 알림을 전송한다. 
또한, 일회성으로 특정 이벤트를 알리는 기능도 포함된다.
*/


/*
# 1. `setTimeout`으로 일회성 이벤트 알림 구현
종을 울리기 전에 안내 메시지를 출력한다.
*/
console.log("종이 울립니다. 잠시 후 알림!");

setTimeout(() => {
    console.log("종이 울렸습니다!");
}, 2000); // 2초 후 실행

/*
결과 설명
- `setTimeout`은 일정 시간 후 콜백을 실행하여 일회성 알림을 구현.
- 2초 후 "종이 울렸습니다!"가 출력된다.
*/



/*
# 2. `setInterval`로 정기적인 알림 구현
매일 정각마다 종이 울리도록 설정한다.
*/
let ringCount = 0;

const ringBell = setInterval(() => {
    console.log(`정각 알림: 종이 ${++ringCount}번 울렸습니다.`);
    if (ringCount === 3) {
        clearInterval(ringBell);
        console.log("종 울리기 종료");
    }
}, 1000); // 1초 간격으로 실행

/*
결과 설명
- `setInterval`은 1초 간격으로 알림 메시지를 출력.
- 3번 실행 후 `clearInterval`로 타이머를 종료.
*/




/*
# 3. `clearTimeout`으로 타이머 중지
특정 조건에서 타이머를 중지한다.
*/
const reminder = setTimeout(() => {
    console.log("이 메시지는 출력되지 않습니다.");
}, 5000);

setTimeout(() => {
    clearTimeout(reminder);
    console.log("알림이 취소되었습니다.");
}, 2000);

/*
결과 설명
- 첫 번째 `setTimeout`은 5초 후 메시지를 출력하도록 설정.
- 두 번째 `setTimeout`은 2초 후에 타이머를 취소, 알림이 출력되지 않음.
*/

/*
결론
1. `setTimeout`과 `setInterval`은 비동기 작업을 예약하고 실행할 수 있다.
2. `clearTimeout`과 `clearInterval`로 타이머를 제어하여, 작업을 동적으로 중단할 수 있다.
3. 타이머 함수는 효율적인 작업 예약 및 주기적 실행에 유용하다.
*/
