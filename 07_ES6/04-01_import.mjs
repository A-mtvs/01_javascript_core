/*
.mjs 파일에 대한 설명
.mjs 파일은 ECMAScript 모듈(ESM)을 나타내는 파일 확장자로, ES6(ECMAScript 2015)에서 
도입된 모듈 시스템을 사용하기 위해 설계되었다. 
이 확장자는 Node.js와 브라우저 환경 모두에서 ES 모듈을 명확하게 구분할 수 있도록 돕는다.
*/

import { add, subtract } from './04_module.mjs';

console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5



/*
# 2. Default Export: 기본 값 내보내기
*/

import multiply from './04_module.mjs';

console.log(multiply(10, 5)); // 50



/*
# 3. 모듈 병합: 여러 모듈 통합
*/

import * as Utils from './04_module.mjs';

console.log(Utils.greet('Alice')); // Hi, Alice!
console.log(Utils.farewell('Alice')); // Goodbye, Alice!

