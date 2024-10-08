window.addEventListener('storage', event => {
  console.log('i am two.html')
  console.log('스토리지 이벤트 발생')
  console.log(`url : ${event.url}`)
  if(event.storageArea == sessionStorage){
    console.log('sessionStorage event 발생..')
  }else if(event.storageArea == localStorage){
    console.log('localStorage event..')
  }
  console.log(`key: ${event.key}, ${event.oldValue} 에서 ${event.newValue} 로 변경`)
})