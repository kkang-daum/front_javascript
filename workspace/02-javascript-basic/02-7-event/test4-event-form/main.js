"use strict";

let result = document.getElementById('result')
let form = document.getElementById('form')

function printResult(msg){
  result.innerHTML = msg 
}

form.addEventListener('submit', (e) => {
  //form 의 submit 은 브라우저에 기본으로 서버 요청, 결과로
  //화면 갱신처리....
  //js 에서 이벤트 처리하려면 브라우저의 기본 이벤트 처리 되지 않게 막아서
  e.preventDefault()
  printResult('submit event...')
})
form.addEventListener('reset', () => {
  printResult('reset event...')
})

let input1 = document.getElementById('input1')
let select1 = document.getElementById('select1')

input1.addEventListener('focus', (e)=>{
  //색상 변경.. 
  //현재 이벤트가 발생한 dom node 객체 획득.. 
  //event 객체를 통해서 현재 이벤트가 발생한 node 객체 획득 가능..
  //e.target - 현재 이벤트 발생 객체..
  e.target.style.background = 'pink'
})
input1.addEventListener('blur', (e) => {
  e.target.style.background = ''
  //유저 입력 데이터 획득... 
  printResult(`input data : ${e.target.value}`)
})

select1.addEventListener('focus', (e) => {
  e.target.style.background = 'pink'
})
select1.addEventListener('change', (e) => {
  printResult(`input change : ${e.target.value}` )
})
select1.addEventListener('blur', (e) => {
  e.target.style.background = ''
})