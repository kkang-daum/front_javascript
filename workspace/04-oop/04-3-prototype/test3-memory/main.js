"use strict"

function User1(name){
  this.name = name 
  this.sayHello = function(){
    console.log(`Hello, ${this.name}`)
  }
}

let user1 = new User1('홍길동')
let user2 = new User1('이길동')
user1.sayHello()//Hello, 홍길동
user2.sayHello()//Hello, 이길동
//user1 과 user2 에 있는 sayHello 가 동일 함수인가?
console.log(user1.sayHello == user2.sayHello)//false


function User2(name){
  this.name = name
  User2.prototype.sayHello = function(){
    console.log(`Hello, ${this.name}`)
  }
}
let user3 = new User2('홍길동')
let user4 = new User2('김길동')
user3.sayHello()//Hello, 홍길동
user4.sayHello()//Hello, 김길동

console.log(user3.sayHello == user4.sayHello)//true

console.dir(user1)
console.dir(user2)
console.dir(user3)
console.dir(user4)