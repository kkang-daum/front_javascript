"use strict"

let loginFormNode = document.getElementById('loginForm')
let loginOkNode = document.getElementById('loginOk')
let idNode = document.getElementById('id')

function changeShowHide(show, hide){
  hide.setAttribute('class', 'hide')
  show.removeAttribute('class')
}

function login(){
  let id = document.getElementById('idInput').value 
  let pw = document.getElementById('pwInput').value 
  if(id.trim() === pw.trim()){
    alert('로그인 성공')
    idNode.innerHTML = id
    localStorage.setItem('loginId', id)
    changeShowHide(loginOkNode, loginFormNode)
  }else {
    alert('로그인 실패')
  }
}
function logout(){
  localStorage.removeItem('loginId')
  changeShowHide(loginFormNode, loginOkNode)
}

//html 로딩 되자마자(최초), storage 데이터를 보고 어느 화면이 나와야 하는지 판단..
window.onload = function(){
  let id = localStorage.getItem('loginId')
  if(id){
    idNode.innerHTML = id 
    changeShowHide(loginOkNode, loginFormNode)
  }else {
    changeShowHide(loginFormNode, loginOkNode)
  }
}