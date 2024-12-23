/*
# 문법 설명
1. `async`는 함수 앞에 붙여 비동기 작업을 포함할 수 있음을 나타낸다.
2. `await`은 비동기 작업(Promise)의 완료를 기다린다.
3. 코드 가독성이 높아지고, `then` 체인 대신 동기적 코드처럼 작성 가능하다.
*/

/*
# 스토리
가상의 도서 대여 시스템을 구현한다.
- 사용자가 도서를 대여하면 대여 처리 후 알림을 받는다.
- 여러 도서를 대여하는 시나리오를 단계적으로 처리한다.
*/

/*
# 실습 코드
*/

/*
# 1. 기본 async/await 사용
도서 대여 상태를 처리한다.
*/
function borrowBook(bookId) {
    return new Promise((resolve, reject) => {
        console.log(`도서 ${bookId} 대여 처리 중...`);
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% 성공 확률
            if (success) {
                resolve(`도서 ${bookId} 대여 성공.`);
            } else {
                reject(`도서 ${bookId} 대여 실패.`);
            }
        }, 2000);
    });
}

async function processBorrow(bookId) {
    try {
        const result = await borrowBook(bookId);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

processBorrow(101);

/*
결과 설명
- `borrowBook`은 도서 대여를 Promise로 처리.
- `await`은 Promise의 결과를 기다린 후 `resolve` 또는 `reject` 결과를 반환.
- `try...catch`로 성공과 실패를 처리.
*/

/*
# 2. 여러 도서 대여 처리
여러 도서를 순차적으로 대여한다.
*/
async function processMultipleBorrows(bookIds) {
    for (const bookId of bookIds) {
        await processBorrow(bookId);
    }
    console.log("모든 도서 대여가 완료되었습니다.");
}

processMultipleBorrows([201, 202, 203]);

/*
결과 설명
- `for...of` 루프에서 `await`을 사용해 도서를 순차적으로 대여.
- 모든 대여가 끝나면 완료 메시지를 출력.
*/

/*
# 3. 병렬 처리
여러 도서를 병렬로 대여한다.
*/
async function processBorrowInParallel(bookIds) {
    const borrowPromises = bookIds.map((id) => borrowBook(id));
    try {
        const results = await Promise.all(borrowPromises);
        console.log("모든 도서 대여 성공:", results);
    } catch (error) {
        console.error("일부 도서 대여 실패:", error);
    }
}

processBorrowInParallel([301, 302, 303]);

/*
결과 설명
- `Promise.all`을 사용해 모든 도서를 병렬로 대여.
- 모든 Promise가 성공하면 결과 배열을 반환.
- 하나라도 실패하면 `catch`로 에러 처리.
*/

/*
결론
1. `async/await`은 비동기 작업을 동기적 코드처럼 간결하게 작성할 수 있다.
2. `try...catch`를 통해 에러를 명확히 처리할 수 있다.
3. `Promise.all`과 함께 사용하면 병렬 처리가 가능하다.
*/
