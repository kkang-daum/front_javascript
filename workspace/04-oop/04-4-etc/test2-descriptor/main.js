"use strict"

let obj = {
  name: '홍길동',
  age: 10,
  address: 'seoul'
}

//특정 객체의 property 의 descriptor 확인... 
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
//{value: '홍길동', writable: true, enumerable: true, configurable: true}

//writable.... 값 변경 못하게 하고자 할때.. 
Object.defineProperty(obj, 'age', {writable: false})
obj.name = '김길동'
// obj.age = 20//error..........

//enumerable.............................
console.log(Object.keys(obj))//['name', 'age', 'address']
console.log(Object.values(obj))//['김길동', 10, 'seoul']
console.log(Object.entries(obj))
//0:(2) ['name', '김길동']
//1: (2) ['age', 10]
//2: (2) ['address', 'seoul']

//in.. 열거 예약어..obj 의 entry 갯수만큼 for 반복.. 
for(let property in obj){
  console.log(property)
}
//name
//age
//address

Object.defineProperty(obj, 'age', {enumerable: false})
console.log(Object.entries(obj))
//0: (2) ['name', '김길동']
//1: (2) ['address', 'seoul']

for(let property in obj){
  console.log(property)
}
//name
//address
console.log(obj.age)//10

//configurable......
//wriable 을 false 로 지정했다고 하더라도.. 누군가가 true 로 변경해서
//값 변경을 할수도..
Object.defineProperty(obj, 'age', {writable:true})
obj.age = 20
//descriptor 를 조정한 후에 다시 descriptor 가 조정되지 못하게... 
Object.defineProperty(obj, 'age', {writable:false, configurable:false})
Object.defineProperty(obj, 'age', {writable:true})