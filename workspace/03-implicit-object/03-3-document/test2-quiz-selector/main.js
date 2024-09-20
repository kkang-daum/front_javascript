"use strict";

let resultNode = document.getElementById('result')
let formNode = document.getElementById('myForm')

function printResult(msg){
  resultNode.innerHTML = msg
}

formNode.addEventListener('submit', (e) => {
  //form submit 이벤트 기본 적용되지 않게 막아야.. 
  e.preventDefault()
  //유저 입력 데이터 획득.. 
  let nameNode = document.getElementById('name')
  let hobbyNode = document.querySelectorAll('input[id="hobby"]:checked')
  let genderNode = document.querySelector('input[name="gender"]:checked')

  let hobbyResult = ''
  hobbyNode.forEach((item) => {
    hobbyResult += `${item.value}`
  })
  let genderResult = ''
  if(genderNode){
    genderResult = genderNode.value
  }

  let msg = `name : ${nameNode.value}<br/>취미 : ${hobbyResult}<br/>성별 : ${genderResult}`
  printResult(msg)
})