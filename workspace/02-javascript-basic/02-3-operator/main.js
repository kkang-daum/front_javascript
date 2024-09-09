"use strict";

//산술 연산자...
let data1 = 10
let data2 = 4
console.log(data1 + data2)
console.log(data1 - data2)
console.log(data1 * data2)
console.log(data1 / data2)//2.5
console.log(data1 % data2)//2

//증감연산자... 
let data3 = 10
data3++
console.log(data3)//11
++data3
console.log(data3)//12
data3--
console.log(data3)//11
--data3
console.log(data3)//10


console.log('-------- 연산자 우선순위 --------------')
let data4 = 10
let data5 = 10
let result1 = data4++;
let result2 = ++data5
console.log(data4, result1)//11, 10
console.log(data5, result2)//11, 11

console.log('---------- 할당 연산자 -----------')
let a1 = 10
a1 = a1 + 10
console.log(a1)//20
a1 += 10
console.log(a1)//30

console.log('--------- + 연산자 -------------')
console.log(10 + 20)//30
console.log('hello' + 'world')//helloworld
console.log('hello' + 10)//hello10
console.log('10' + '20')//1020
console.log(10 + '20')//1020
//문자를 숫자로 변형시켜서 연산 시킬 수 있다..
//물론 문자가 숫자로 변형 가능한 데이터야 한다..
console.log(10 + parseInt('20'))//30
//숫자 -> 문자열
console.log((10).toString() + 20)//1020
//js 는 명시적 타입은 없지만..
//타입변형 시켜서.. 숫자 <-> 문자..
//타입변형. 캐스팅(casting) 이라고 용어로 부른다.. 

console.log('----- 비교 연산 ----------')
let a2 = 10
let a3 = 10
console.log(a2 == a3)//true
console.log(a2 != a3)//false
console.log(a2 === a3)//true
console.log(a2 !== a3)//false

a2 = 10
a3 = '10'
console.log(a2 == a3)//true
console.log(a2 != a3)//false
console.log(a2 === a3)//false
console.log(a2 !== a3)//true

console.log(5 < 10)//true
console.log(5 < '10')//true
console.log('hello' < 'world')//true
console.log('abc' < 'abd')//true
console.log('이길동' < '김길동')//false

let a4 = true
console.log(a4)
console.log(!a4)