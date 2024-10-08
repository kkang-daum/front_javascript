"use strict"

function saveSessionStorage() {
  let key = document.getElementById('key').value 
  let value = document.getElementById('value').value
  sessionStorage.setItem(key, value)
}

function saveLocalStorage() {
  let key = document.getElementById('key').value 
  let value = document.getElementById('value').value
  localStorage.setItem(key, value)
}

function openNewWindow(){
  window.open('one.html')
}

//storage event... 
window.addEventListener('storage', event => {
  console.log('i am index.html')
  console.log('스토리지 이벤트 발생')
  console.log(`url : ${event.url}`)
  if(event.storageArea == sessionStorage){
    console.log('sessionStorage event 발생..')
  }else if(event.storageArea == localStorage){
    console.log('localStorage event..')
  }
  console.log(`key: ${event.key}, ${event.oldValue} 에서 ${event.newValue} 로 변경`)
})