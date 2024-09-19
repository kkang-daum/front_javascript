"use strict";

//window 의 기본 정보 추출... 
console.log(window.innerWidth, window.innerHeight)//520 298
console.log(window.outerWidth, window.outerHeight)//1057 725
console.log(window.screenLeft, window.screenTop)
//스크롤 정보는 스크롤 이벤트가 발생한 경우만 유지.. 
window.addEventListener('scroll', () => {
  console.log(window.scrollX, window.scrollY)
})

//새로운 tap으로 새창이 뜬다.. 
//target 을 지정하지 않으면 기본이 _blank... 새창..
function myOpen1() {
  window.open('http://www.google.com')
}

function myOpen2() {
  window.open('http://www.google.com', '_self')
}

//자식창 지칭 객체.. 
let childWindow

const myOpen3 = () => {
  childWindow = window.open(
    'http://www.likelion.net',
    '_blank',
    'left=100,top=100,width=300,height=400'
  )
  if(childWindow == null){
    alert('팝업이 차단되었습니다. 해제해 주세요..')
  }
}

const myClose = () => {
  console.dir(childWindow)
  childWindow.close()
}

function myScroll() {
  window.scrollBy(100,100)
}

