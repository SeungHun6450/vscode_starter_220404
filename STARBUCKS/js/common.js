// document : html 자체
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // html속성을 지정하는 메소드
  searchInputEl.setAttribute('placeholder', '통합 검색');
});

// focus가 해제 됐을 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 연도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2022