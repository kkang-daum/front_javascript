"use strict"

//시계부분이 보여야 하는지?
let isShow = false 

let btnNode = document.getElementById('btn')
let clockNode = document.getElementById('clock')

//interval id
let clockInterval

function printClock(){
  //현재 시간 획득.. 
  let date = new Date()
  //필요한 데이터만 획득..
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  //출력하고자 하는 문자열을 구성한다.. 
  let time = `
    ${hour < 10 ? '0'+hour : hour} : 
    ${min < 10 ? '0'+min : min} : 
    ${sec < 10 ? '0'+sec : sec}
  `
  clockNode.innerHTML = time
}

//이벤트.. 
function showHide(){
  if(isShow){
    //화면에 시간이 출력되고 있다면..==>시간 출력 멈춘다..

    isShow = false 
    btnNode.innerHTML = 'show'
    clockNode.setAttribute('class', 'hide')

    clearInterval(clockInterval)
  }else {
    //시간이 출력되고 있지 않다면.. ==>시간 출력.. 
    isShow = true
    btnNode.innerHTML = 'hide'
    clockNode.removeAttribute('class')

    clockInterval = setInterval(printClock, 1000)
  }
}