const searchEl = document.querySelector('.search');
const serachInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  serachInputEl.focus();
});

serachInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  serachInputEl.setAttribute('placeholder', '통합검색');
});

serachInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  serachInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges')
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
},300));
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    opacity : 1,
    delay : (index+1)*.7
  })
});