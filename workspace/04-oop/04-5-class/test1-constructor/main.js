"use strict"

//클래스(class 예약어로 선언되는 객체 생성 모형) 내에는 3개의 구성요소가 추가될 수 있다.
//변수, 함수, 생성자
class User {
  name = '홍길동'
  sayHello() {
    console.log(`Hello, ${this.name}`)
  }
}
let obj = new User()
obj.sayHello()//Hello, 홍길동

//모든 클래스내에 생성자는 필수.. 생성자가 없는 클래스는 존재할 수 없다..
//new User() 객체 생성 구문 -> 생성자 호출 구문..
//위처럼 개발자가 명시적으로 클래스내에 생성자를 추가하지 않았다면.. 
//아래처럼 선언한 것과 동일하게 자동으로 default constructor 가 추가된다..

class User2 {
  name = '홍길동'

  //constructor 예약어로 선언되는 함수..
  //매개변수를 가지지 않는 생성자를 default constructor..
  //생성자 함수는 어디선가 new 로 객체 생성 시점에 객체 생성 역할을 하는 것이 중요함으로
  //아래처럼 {} 로직을 가지지 않는 생성자도 그 자체로 의미가 있다.
  //원한다면 {} 에 로직을 추가해서.. 객체 생성과 동시에 개발자의 로직이 실행되게 할수도 있고
  constructor(){}

  sayHello() {
    console.log(`Hello, ${this.name}`)
  }
}
let obj2 = new User2()
obj2.sayHello()//Hello, 홍길동


//자동으로 추가되는 생성자는 매개변수 없는 생성자..
//객체 생성하면서 데이터를 전달받아서 생성되어야 한다면.. 개발자가 명시적으로 생성자 선언..
class User3 {
  name = '홍길동'
  constructor(name){
    //name - 생성자가 호출되는 시점에서만 유지되는 local variable
    //this.name - 객체의 멤버 
    this.name = name
  }
  sayHello() {
    console.log(`Hello, ${this.name}`)
  }
}
let obj3 = new User3('김길동')
obj3.sayHello()//Hello, 김길동

//하나의 클래스내에 생성자 여러개 선언..
//==>불가하다.. 클래스내에 명시적으로 생성자 선언은 하나만... 
class User4 {
  constructor(){}
  constructor(name){}
}
let obj4 = new User4('김길동')//error - A class may only have one constructor