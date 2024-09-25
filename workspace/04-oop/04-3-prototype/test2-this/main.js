"use strict"

function User(name){
  this.name = name 
  User.prototype.point = 20
  User.prototype.sayHello = function(){
    console.log(`Hello, ${this.name}, ${this.point}`)
  }
}

let user1 = new User('honggildong')
user1.sayHello()//Hello, honggildong, 20

let user2 = new User('이길동')
//프로토타입에 선언된 멤버를 자신의 객체에서만 다른 값, 다른 로직으로 사용하고 싶다는
//의도..
//this 객체에 추가..
user2.point = 30
user2.sayHello = function(){
  console.log(`안녕하세요 ${this.name}, ${this.point}`)
}
user2.sayHello()//안녕하세요 이길동, 30

let user3 = new User('kimgildong')
user3.sayHello()//Hello, kimgildong, 20