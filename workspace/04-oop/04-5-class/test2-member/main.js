"use strict"

//이 클래스로 생성되는 객체의 멤버를 준비하는 위치.. 
class User {
  //class 영역에 멤버 선언.. 
  name
  sayHello(){
    //멤버 함수내에서.. this 로 객체 멤버 선언.. 
    this.address = 'seoul'
    console.log(`Hello2 , ${this.name}, ${this.age}, ${this.address}`)
  }
  constructor(name, age){
    this.name = name 
    //생성자 내에서 this 로 멤버 선언.. 
    this.age = age 
    this.sayHello2 = function(){
      console.log(`Hello2 , ${this.name}, ${this.age}`)
    }
  }
}
let obj = new User('홍길동', 20)
//클래스 외부에서 객체의 멤버 추가.. 
obj.phone = '0101111'
obj.sayHello()//Hello2 , 홍길동, 20, seoul
obj.sayHello2()//Hello2 , 홍길동, 20
console.log(obj.address, obj.phone)//seoul 0101111