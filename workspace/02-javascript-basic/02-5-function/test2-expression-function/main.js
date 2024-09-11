"use strict";

//선언문 스타일의 함수 선언..
function myFun1(){
  console.log('myFun1 call')
}
//표현식 스타일의 함수 선언
const myFun2 = function(){
  console.log('myFun2 call')
}

myFun1()
myFun2()

//arrow function..............................
const myFun3 = () => {
  console.log('myFun3 call')
}
myFun3()

//화살표 함수, 결과 리턴.. 
const myFun4 = (arg1) => {
  console.log(`myFun3, arg1 : ${arg1}`)
  return 20
}
let result4 = myFun4(10)
console.log(result4)

//함수의 body 가 한줄이라면.. { } 생략가능하며.. 
//{ } 을 생략했다면.. 그 한줄의 실행 값이 자동 리턴된다. return 안써도
const myFun5 = (arg1) => arg1 * 10
let result5 = myFun5(10)
console.log(result5)//100

//매개변수가 하나라면 () 도 생략 가능.. 
const myFun6 = arg1 => arg1 * 10
let result6 = myFun6(10)
console.log(result6)//100