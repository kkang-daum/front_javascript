"use strict"

//일반 함수 선언과 이용...........................
function myFun(name) {
  console.log('myFun call')
}
//선언과 호출은 별개.. 
//원하는 만큼 반복 호출 가능...
myFun('홍길동');
myFun('김길동');//; 으로 명시적.. 


//즉시 실행 함수................................
//선언과 동시에 호출.. 이름을 가지지 않기 때문에.. 반복 호출 불가..
(function (name) {
  console.log('Hello')
})('홍길동');


//특정 변수, 함수의 이용 범위를 한정짓고 싶을때.. 주로.. 라이브러리 코드 내에서..
(function () {
  let data = 10
  function fun1() { }
})()
// data = 20
// fun1()


//특정 변수가 있는데.. 몇몇 함수에서만 사용되게 강제하고자 할때.. 

// let count = 0
// function increment(){
//   count++
// }
// function decrement(){
//   count--
// }
// increment()
// increment()
// decrement()
// console.log(count)//1

// //increment, decrement 에서 사용하는 데이터가.. 코드 어디선가..
// //다른 의미로 사용이 되는것을 방지할 수 없게 된다..
// count = 100
// increment()
// console.log(count)//101


const counter = (function(){
  let count = 0
  return function(argFun){
    count = argFun(count)
    return count
  }
})()

let increment = (no) => ++no
let decrement = (no) => --no

console.log(counter(increment))//1
console.log(counter(increment))//2
console.log(counter(decrement))//1

//어디선가.. 잘못...
let count = 100

console.log(counter(increment))//2
