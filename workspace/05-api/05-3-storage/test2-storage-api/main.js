"use strict"

const apiTest = () => {
  //sessionStorage, localStorage, 함수 모두 동일..
  
  //데이터 저장 구조는 key - value, key 로 식별해서 여러건의 데이터 저장..
  sessionStorage.setItem('data1', '홍길동')
  //key 를 마치 객체의 변수처럼 사용.
  sessionStorage.data2 = '김길동'
  //문자열이 아닌 각 타입의 데이터 저장시 에러가 나지는 않는다.. 데이터 타입 유지 
  //안된다.. 문자열로만 저장된다..
  sessionStorage.setItem('data3', 10)
  sessionStorage.setItem('data4', {
    name: '홍길동',
    age: 10
  })

  console.log('data1', sessionStorage.getItem('data1'))
  console.log('data2', sessionStorage.getItem('data2'))
  console.log('data3', sessionStorage.getItem('data3'), typeof sessionStorage.getItem('data3'))//data3 10 string
  console.log('data4', sessionStorage.getItem('data4'), typeof sessionStorage.getItem('data4'))//data4 [object Object] string

  //객체를 storage 에 저장하겠다면.. 
  //storage 는 문자열로만 저장됨으로.. 코드에서 객체를 문자열로 변형해서 저장..
  //획득시에 다시 객체로 변형해서 사용.. 
  sessionStorage.setItem('data5', JSON.stringify({
    name: '홍길동',
    age: 10
  }))
  let data5 = JSON.parse(sessionStorage.getItem('data5'))
  console.log(data5)
}

const removeTest = () => {
  //하나의 데이터 삭제.. 
  // sessionStorage.removeItem('data1')
  //전체 데이터 삭제.. 
  sessionStorage.clear()
}

const getAllDataTest = () => {
  //스토리지에 있는 모든 데이터 획득해서 핸들링.. 
  // for(let i = 0; i < sessionStorage.length; i++){
  //   let key = sessionStorage.key(i)//스토리지의 key 를 순차적으로 획득.. 
  //   console.log(key, sessionStorage.getItem(key))
  // }

  //아래의 방법으로.. 전체 데이터 획득할 수도 있고..
  let keys = Object.keys(sessionStorage)
  keys.forEach(key => {
    console.log(key, sessionStorage.getItem(key))
  })
}