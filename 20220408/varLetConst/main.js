// 재사용이 가능!
// 변수 선언!

let a = 2; 
let b = 5;

console.log(a + b);  // 7
console.log(a - b);  // -3
console.log(a * b);  // 10
console.log(a / b);  // 0.4

// 값(데이터)의 재할당 가능!
let a1 = 12;
console.log(a1);  // 12

a1 = 999;
console.log(a1);  // 999

// 값(데이터)의 재할당 불가!
const a2 = 12;
console.log(a2); //12

a2 = 999;
console.log(a2);  // TypeError: Assginment to constant variable.

// 예약어
// let this = `Hello!`;  // SyntaxError
// let if = 123;  // SyntaxError
// let break = true;  // SyntaxError