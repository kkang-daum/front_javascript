"use strict"

//js 에서 에러 핸들링 구문... 
//코드가 실행되다가 얼마든지 에러가 발생할 수 있다..
//에러 상황이면 프로그램이 종료.. 
//에러가 발생이 되었다고 하더라도 정상적으로 프로그램을 실행시키기 위한 기법
try{
  //정상적으로 실행되어야 하는 코드... 
  console.log('1')
  throw new Error('my error...')//에러가 발생되었다고 가정하고... 
  //에러가 발생한 라인의 코드부터 try 의 밑 부분은 실행되지 않는다.. 
  //바로 catch 부분이 실행.. 
  console.log('1-1')
}catch(e){
  //try 에서 에러가 발생될때 자동 호출.. 에러 대응 코드.. 
  console.log('2')
}
console.log('3')
//1 -> 2 -> 3



//test1..... 비동기 실행후 결과 전달할 필요 없는 경우...
// function myFun1(){
//   return new Promise(() => {
//     let interval = setInterval(() => {
//       console.log('in promise')
//     }, 1000)
//     setTimeout(() => {
//       clearInterval(interval)
//     }, 3000)
//   })
// }
// console.log('step1')
// myFun1()
// console.log('step2')

//test2....promise 결과 데이터 발행, 획득.. 
// function myFun2(){
//   return new Promise((resolve) => {
//     //resolve() 함수의 매개변수가 결과 데이터이다.. then 에 등록한 함수가 호출
//     //되면서 매개변수로 전달된다..
//     setTimeout(() => resolve(10), 1000)
//   })
// }
// myFun2()
//   .then((value) => console.log(`result : ${value}`))

//test3........ 결과 및 에러 발행, 획득.. 
function myFun3(num){
  return new Promise((resolve, reject) => {
    if(num > 0) resolve(num * num)
    else reject('0보다 큰수를 지정하세요..')
  })
}
//reject 까지 획득하려면 then 에 함수 두개 등록...
// myFun3(10).then(
//   (value) => console.log(`result : ${value}`),//resolve 데이터.. 
//   (error) => console.log(error)//reject 시에 호출.. 
// )//result : 100

// myFun3(-1).then(
//   (value) => console.log(`result : ${value}`),//resolve 데이터.. 
//   (error) => console.log(error)//reject 시에 호출.. 
// )//0보다 큰수를 지정하세요..

// //then 에 콜백함수가 여러개 등록하는 것이 코드 작성상 불편하다면.. 
// //error 만 별도로 catch 에 등록.. 
// myFun3(10)
//   .then((value) => console.log(`result : ${value}`))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('finally 부분 실행...'))//필수는 아니다. 원한다면..
//   //finally 는 마지막에 무조건 실행..

//result : 100
//finally 부분 실행...

myFun3(0)
  .then((value) => console.log(`result : ${value}`))
  .catch((error) => console.log(`error : ${error}`))
  .finally(() => console.log('finally 부분 실행...'))
//error : 0보다 큰수를 지정하세요..
//finally 부분 실행...