"use strict";

//객체 선언.. object literal 기법으로.. 
let user = {
  name: '홍길동',
  age: 20,
  isMember: true,
  //객체 내에 객체.. 
  order: {
    productId: 2,
    count: 10
  },
  //함수 멤버 -> 메서드.. 
  sayHello: function(){
    console.log(`Hello , ${this.name}`)
  },
  sayHello1: function(){
    //객체 내에서 자신의 다른 멤버(변수, 함수)를 이용하려면 this 예약어로.. 이용해야..
    //this 는 예약어, 어떤 객체내에서 자기 자신을 지칭하는 예약어.. 
    console.log(`Hello, ${this.name} - ${age}`)
  },
  sayHello2: () => {
    //객체 내에 함수를 화살표 함수로 선언하는 것이 문제가 되는 것이 아니라.. 
    //화살표 함수내에서 this 가 객체 자신을 지칭하지 못한다는 문제..
    //화살표 함수는 간단하게 함수를 선언해서 이용하는 경우 주로 사용, this 를 사용하지 않는 경우에
    //사용할 것을 권장..  
    console.log(`Hello, ${this.name}, ${this.age}`)
  }
}
//선언된 객체 멤버 접근.. 
//객체의 멤버 접근은 . 으로...
console.log(user.name)//홍길동
console.log(user.order.productId)//2
user.sayHello()//Hello , 홍길동
// user.sayHello1()//error..... age is not defined
user.sayHello2()//Hello, , undefined


//축약으로.. 멤버 선언... 
let name = '김길동'
let age = 30

let user1 = {
  //아래처럼 선언해도 되지만 key:value 가 동일하다면..
  // name: name,
  // age: age
  name,
  age,
  sayHello: function(){
    console.log(`${this.name}, ${this.age}`)
  }
}
user1.sayHello()//김길동, 30

//객체 선언할 때는 없던 멤버를 나중에 추가 가능........
user1.address = 'seoul'
user1.sayHello2 = function(){
  console.log(`${this.name}, ${this.age}, ${this.address}`)
}
user1.sayHello2()//김길동, 30, seoul