"use strict"

//test1............... 아래의 생성자 함수, 클래스는.. 전혀 캡슐화 되어 있지 않다..
//외부에서 객체의 데이터를 가지는 변수멤버를 직접 접근하고 있다..
//유지보수성이 떨어진다..
//생성자 함수..
// function UserFunction(){
//   this.name = '홍길동'
//   this.age = 10
// }
// let obj1 = new UserFunction()
// obj1.name = '김길동'
// obj1.age = 20
// console.log(obj1.name, obj1.age)

// class UserClass {
//   constructor(){
//     this.name = '홍길동'
//     this.age = 10
//   }
// }
// let obj2 = new UserClass()
// obj2.name = '이길동'
// obj2.age = 30
// console.log(obj2.name, obj2.age)




//test2........... 캡슐화를 적용해서.. 
//멤버변수는 외부에 노출 안되게.. 변수 값 변경 및 획득이 필요하다면.. 함수를 제공하고
//그 함수를 오픈해서.. 함수를 이용해서.. 변수를 이용하게..

function UserFunction(){
  //생성자 함수내에 변수가 선언되었지만 this. 으로 선언하지 않았다..
  //생성되는 객체에 담기지 않는다.. 로컬 변수이다.. 외부에서는 이용못한다..
  let name = '홍길동'
  let age = 10
  //이 값을 객체에 유지했다가.. 함수를 통해 이용하게..
  //외부에서 이용하는 함수내에.. lexical 정보로 유지되게.. 
  this.getName = function(){
    return name
  }
  this.setName = function(value){
    name = value
  }
  this.getAge = function(){
    return age
  }
  this.setAge = function(value){
    age = value
  }
}
let obj1 = new UserFunction()
obj1.setName('김길동')
obj1.setAge(20)
console.log(obj1.getName(), obj1.getAge())

class UserClass {
  #name = '홍길동'
  #age = 10

  getName(){
    return this.#name
  }
  setName(value){
    this.#name = value
  }
  getAge(){
    return this.#age
  }
  setAge(value){
    this.#age = value
  }
}
let obj2 = new UserClass()
obj2.setName('이길동')
obj2.setAge(30)
console.log(obj2.getName(), obj2.getAge())