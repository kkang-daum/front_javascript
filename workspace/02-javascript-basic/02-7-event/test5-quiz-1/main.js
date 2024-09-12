"use strict";

let resultNode = document.getElementById('result')
let formNode = document.getElementById('myForm')

function printResult(msg){
  resultNode.innerHTML = msg 
}

formNode.addEventListener('submit', (e) => {
  e.preventDefault()

  let nameNode = document.getElementById('name')
  let phoneNode = document.getElementById('phone')
  let jobNode = document.getElementById('job')

  let msg = `name : ${nameNode.value}<br/> phone : ${phoneNode.value}<br/> job : ${jobNode.value}`
  printResult(msg)
})