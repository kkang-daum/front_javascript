"use strict"

//test1.........private.....................
//js 에는 private 이라는 예약어 없다. oop 에서 private 이라는 개념은
//클래스 내에 선언된 멤버가 그 클래스내에서만 사용되게 강제하는 기법을 의미한다..
class User {
  //이 클래스내에 선언된 변수, 함수 중에서.. 일부는..
  //클래스내에서 필요하니까.. 선언하기는 하지만.. 
  //외부에서 이용하지 못하게 하고 싶다.. ==> 외부와 결합도를 낮추어서 유지보수성 증대
  //private 개념으로 사용하고자 하는 멤버의 이름을 #으로 시작.. 
  #name;
  age;
  constructor(name, age){
    this.#name = name
    this.age = age 
  }
  #myFun(){
    console.log('myFun call....')
  }
  sayHello(){
    console.log(`Hello, ${this.#name}, ${this.age}`)
    this.#myFun()
  }
}
let user = new User('홍길동', 20)
// user.#name = '김길동'//error
user.age = 30
user.sayHello()
// user.#myFun()//error


//test........static.................................
//클래스는 객체의 모형이다.. 클래스의 대부분의 멤버는 객체 메모리에 할당되어야 하는
//객체 멤버이다..
//필요에 의해서 선별적으로.. 객체별 메모리 할당이 필요없는 멤버에 한해서.. static 멤버
class MyClass {
  data1 = 10
  static data2 = 20
  myFun1(){
    console.log(`myFun1 call.... ${this.data1} ${this.data2}`)
  }
  static myFun2(){
    //static member 함수내에서 object member - undefined
    console.log(`myFun2 call....${this.data1} ${this.data2}`)
  }
}
//static 멤버 접근.. 객체 생성 없이, 클래스명으로 접근.. 
MyClass.myFun2()//myFun2 call....undefined 20
console.log(MyClass.data2)//20

//객체 멤버를 클래스명으로 접근... 
console.log(MyClass.data1)//undefined
// MyClass.myFun1()//error

//객체 멤버 - 객체명으로.. 
let obj = new MyClass()
console.log(obj.data1)//10
obj.myFun1()//myFun1 call.... 10 undefined

//static 멤버 - 객체명으로.. 
console.log(obj.data2)//undefined
// obj.myFun2()//error..

//==>static 멤버는 클래스명으로..
//==>object 멤버는 객체생성후 객체명으로.. 