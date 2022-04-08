// <div class="box">Box!!</div>
// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.addEventListener('click', function () {
//   console.log('Click!!');
//   boxEl.classList.add('active');
//   console.log(
//     boxEl.classList.contains('active')
//   )
//   boxEl.classList.remove('active');
//   console.log(
//     boxEl.classList.contains('active')
//   )
// });


// HTML 요소(Element) 1개 검색/찾기
// const boxEl2 = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드!
// boxEl2.addEventListener();

// 인수(Arguments)를 추가 가능!
// boxEl2.addEventListener(1,2);

// 1 - 이벤트(Event, 상황)
// boxEl2.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
// boxEl2.addEventListener('click', function() {
//   console.log('Click~!');
// })

// 요소의 클래스 정보 객체를 활용!
// boxEl2.classList.add('active');
// let isContains = boxEl.classList.contains('active');
// console.log(isContains);	// true

// boxEl2.classList.remove('active');
// isContains = boxEl.classList.contains('active');
// console.log(isContains);	// false

// -----------------------
// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
// boxEls.forEach(function () {});

// 첫 번째 매개변수(boxEls) : 반복 중인 요소.
// 두 번째 매개변수(index) : 반복 중인 번호
// boxEls.forEach(function (boxEl, index) {});

// 출력!
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(index, boxEl);
// });


// -------------------------------------------
{/* <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div> */}

const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'HUN!';
console.log(boxEl.textContent);