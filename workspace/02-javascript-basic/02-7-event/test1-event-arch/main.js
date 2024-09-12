"use strict";

//html 문서 로딩 완료 이벤트... dom node 가 메모리에 완성된 순간
window.addEventListener('load', () => {
  console.log('html 문서 로딩이 완료.. ')
})
window.onload = () => {
  console.log('html 문서 로딩이 완료... 2')
}

const myEventHandler = () => {
  console.log('myEventHandler.. button click')
}
let button1Node = document.getElementById('button1')
button1Node.addEventListener('click', () => {
  console.log('button 1 click')
})

let button2Node = document.getElementById('button2')
button2Node.onclick = () => {
  console.log('button 2 click')
}