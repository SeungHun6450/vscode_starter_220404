const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


/* window => 브라우저의 하나의 탭(창), 보고있는 화면 자체
scroll 시 event 발생!
loadash : main.index에 loadsh.js를 검색해서 나온 script 복사해서 붙혀넣기
__throttle(함수, 시간) : scroll시 event 간격을 0.3초로 늘림
몇십개가 한번에 발생하지 않게 부하를 줬다!
scroll event 사용 시 자주 사용하는 기능이므로 기억해둘것!
event handler */
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
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0  
    })
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
      // 버튼 숨기기!
      gsap.to(toTopEl, .2, {
        x: 100
      });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})


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
  centeredSlides: true,   // 1번 슬라이가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' : 기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.add('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, // 선택자
     random(1.5, 2.5),  // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // 무한 반복
      yoyo: true,  // 재생
      ease: Power1.easeInOut, // gsap easing에서 power1, easeinout 선택
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});