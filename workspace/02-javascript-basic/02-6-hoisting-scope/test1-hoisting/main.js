"use strict";

//var hoisting test......................
//아래에 선언된 변수의 선언부분만(값 할당은 빼고) 위로 올린다.
console.log(`step1, data1 = ${data1}`)//step1, data1 = undefined
data1 = 20
console.log(`step2, data1 = ${data1}`)//step2, data1 = 20
var data1 = 10
console.log(`step3, data1 = ${data1}`)//step3, data1 = 10

//test2................let, const hoisting............
// console.log(data2)//Cannot access 'data2' before initialization
// console.log(data3)//Cannot access 'data3' before initialization
let data2 = 10
const data3 = 30

//==>var 에 한해서만 hoisting 에 의해 선언위치 위에서 변수 이용 가능

//test3.........함수 호이스팅................
console.log(myFun1())//myFun1 call
function myFun1(){
  return 'myFun1 call'
}

// console.log(myFun2())//error... Cannot access 'myFun2' before initialization
const myFun2 = () => {
  return 'myFun2 call'
}

//var 로 함수를 선언하면 호이스팅이 가능할까?????????
//var 로 선언을 하면.. 호이스팅이 되기는 한다..
//선언부분만 위로 올린다.. 값이 할당 되기 전까지는 undefined 상태이다.
console.log(myFun3())//myFun3 is not a function
var myFun3 = () => {
  return 'myFun3 call'
}

//표현식 함수로 선언하면 호이스팅 안된다..