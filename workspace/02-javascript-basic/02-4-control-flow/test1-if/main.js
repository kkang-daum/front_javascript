"use strict";

let age  = 23
let address = '서울'

//if.................
if(age <= 10){
  console.log(`age : ${age}, 당신의 나이는 조건에 만족합니다.`)
}

//if.. else..............
if(age <= 10){
  console.log(`age : ${age}, 당신의 나이는 조건에 만족합니다.`)
}else {
  console.log(`age : ${age}, 당신의 나이는 조건에 만족하지 않습니다.`)
}

//if ... else if ...................
if(age < 30 && address === '서울'){
  console.log(`age : ${age}, address : ${address}, 나이조건에 만족하고 서울에 거주합니다.`)
}else if(age < 30 && address === '부산'){
  console.log(`age : ${age}, address : ${address}, 나이조건에 만족하고 부산에 거주합니다.`)
}else {
  console.log(`age : ${age}, address : ${address}, 나이, 지역 조건에 만족하지 않습니다.`)
}

//if, else block 이 한줄이라면 {} 생략 가능..
if(age < 30)
  console.log('조건에 만족합니다.')
else
  console.log('조건에 만족하지 않습니다. ')

//js 는 다양한 타입의 데이터가 true/false 로 판단될 수 있다..
let data = 1
if(data){
  console.log('data is true')//실행.. 
}else {
  console.log('data is false')
}

//if() 에 들어가야 하는 값은 true/false
//만약 숫자, 문자등의 데이터가 들어오면 boolean 으로 변형시켜서 판단하게 되어 있다..
console.log(Boolean(1))//true
console.log(Boolean(0))//false
console.log(Boolean(10))//true
console.log(Boolean(-1))//true
console.log(Boolean('hello'))//true 
console.log(Boolean(null))//false
console.log(Boolean(undefined))//false

if('hello'){
  console.log('...true')//실행...
}else {
  console.log('...false')
}

let data1 = null 
if(data1){}else {}
let data2;
if(data2){}else {}
