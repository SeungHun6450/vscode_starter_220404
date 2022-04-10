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

const badgeEl = document.querySelector('header .badges');
/* window => 브라우저의 하나의 탭(창), 보고있는 화면 자체
scroll 시 event 발생!
loadash : main.index에 loadsh.js를 검색해서 나온 script 복사해서 붙혀넣기
__throttle(함수, 시간) : scroll시 event 간격을 0.3초로 늘림
몇십개가 한번에 발생하지 않게 부하를 줬다!
scroll event 사용 시 자주 사용하는 기능이므로 기억해둘것! */
window.addEventListener('scroll', _.throttle(function () {
  // scroll시 scrollY가 갱신됨, 화면의 위치를 숫자로 표시
  if(window.scrollY > 500) {
    /* 배지 숨기기
       badgeEl.style.display = 'none';
       gsap cdn 검색 후 script index.html에 추가
       화면 전환 효과를 위해 사용
       gsap.to(요소, 지속시간, 옵션);
    */
    gsap.to(badgeEl, .6, {
      opacity: 0
      // 사라져도 실제로 마우스를 대보면 포인터가 적용되어 있기 때문에 추가
      , display: 'none'
    });
  } else {
    /* 배지 보이기
       badgeEl.style.display = 'block';
       gsap cdn 검색 후 script index.html에 추가
       화면 전환 효과를 위해 사용
       gsap.to(요소, 지속시간, 옵션);
    */
       gsap.to(badgeEl, .6, {
        opacity: 1
        , display: 'block'
      });
  }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7 // 0.7, 1.4 ,2.1, 2.8
    , opacity: 1
  });
});


// Swiper
// new Swiper(선택자(인수로 삽입), 객체데이터)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,   // 슬라이드 사이 여백
  centerSlides: true,   // 1번 슬라이가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  }
});