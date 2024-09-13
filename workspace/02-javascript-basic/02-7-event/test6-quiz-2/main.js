"use strict"

//valid 상황을 여러함수에서 공유해야 한다면.. global 로.. 
let isIdValid = false
let isPwValid = false 
let id = ''
let pw = ''

function idValidCheck(){
  let idNode = document.getElementById('id')
  id = idNode.value 
  let idErrorMsgNode = document.getElementById('idErrorMsg')
  
  //문자열.trim() - 문자열의 앞뒤 공백 제거.. 
  if(id == null || id.trim().length == 0){
    isIdValid = false 
    idErrorMsgNode.innerHTML = '아이디는 필수 입력입니다.'
  }else {
    isIdValid = true 
    idErrorMsgNode.innerHTML = ''
  }
}

function pwValidCheck(){
  let pwNode = document.getElementById('pw')
  pw = pwNode.value

  let pwErrorMsgNode = document.getElementById('pwErrorMsg')
  let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/
  console.log(pw)
  console.log(regExpPassword.test(pw))
  if(pw == null || pw.trim().length == 0){
    isPwValid = false
    pwErrorMsgNode.innerHTML = '패스워드는 필수 입력입니다.'
  }else if(!regExpPassword.test(pw)){
    isPwValid = false
    pwErrorMsgNode.innerHTML = '패스워드는 영문자, 숫자 조합에 6자 이상입니다.'
  }else {
    isPwValid = true 
    pwErrorMsgNode.innerHTML = ''
  }
}

function login(){
  idValidCheck()
  pwValidCheck()
  if(isIdValid && isPwValid){
    let resultNode = document.getElementById('result')
    resultNode.innerHTML = `${id}, ${pw} 로 로그인을 시도합니다.`
  }
}