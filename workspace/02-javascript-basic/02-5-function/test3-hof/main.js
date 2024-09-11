"use strict";

//test1.......local variable va global variable..............
let data1 = 10//global variable.

function myFun(arg1){
  let data2 = 20
  //함수 내부에서 global, local variable 이용... 가능..
  console.log(`${data1}, ${data2}, ${arg1}`)
}
myFun(30)//10, 20, 30
console.log(data1)//10
//매개변수는 그 함수 내에서 선언된 local variable 이다..
// console.log(arg1)//arg1 is not defined
// console.log(data2)//data2 is not defined


//hof.............................
function test1(){ console.log('test1') }
function test2(){ console.log('test2') }

//함수를 매개변수로, 리턴으로.. 일반 선언식 함수도 가능하다..
function myFun2(arg){
  arg()
  return test2
}
let result = myFun2(test1)
result()

//함수를 어떤 함수의 매개변수에, 그 함수의 결과로 리턴...
//그곳에서만 사용되는 함수다.. 굳이 정식으로 선언할 필요가 있을까?

function myFun3(arg){
  arg()
  return () => console.log('test2')
}
let result3 = myFun3(() => console.log('test1'))
result3()

