// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc();  // 1234;


// 함수 안의 특정 값을 반환
function returnFunc() {
  return 123;
}

let a = returnFunc();
console.log(a); // 123


// 함수 선언!
function sum(a, b) { // a와 b는 매개변수(Parameters)
  return a + b;
}

// 재사용!
let a1 = sum(1, 2); // 1과 2는 인수(Arguments)
let b1 = sum(7, 12);
let c1 = sum(2, 4);

console.log(a1, b1, c1);  // 3, 19, 6

// 기명(이름이 있는)함수
// 함수 선언!
function hello() {
  console.log('Hello~');
}
// 기명(이름이 있는)함수
// 함수 표현!
let world = function () {
  console.log('Wolrd~');
}

// 함수 호출~
hello();
world();


// 객체 데이터
const Hun = {
  name: 'Hun',
  age: 27,
  // 메소드(Method) : 속성부분에 함수가 할당되어 있는 경우
  getName: function () { // 함수의 표현
    return this.name;
  }
};

const hisName = Hun.getName();
console.log(hisName); // Hun
console.log(Hun.getName()); // Hun