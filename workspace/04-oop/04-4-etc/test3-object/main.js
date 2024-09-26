"use strict"

//간단하게 객체를 생성해서 사용하는 방법 - object literal.. 
let user1 = {
  name: '홍길동',
  age: 20
}
console.log(user1)//{name: '홍길동', age: 20}
console.dir(user1)
//this - name, age
//prototype - Object
//==>모든 객체는 prototype 이 지정된다.. 

//==>위 object literal 기법으로 만든 객체는 아래처럼 만든것과 동일핟..
//prototype - 객체 정보
let user2 = Object.create(Object.prototype, {
  name: {value: '홍길동'},
  age: {value: 20}
})
console.log(user2)//{name: '홍길동', age: 20}
console.dir(user2)

//==>
//생성자 함수를 이용해 객체를 만들면 그 함수에 prototype 이 자동으로 만들어진다..
//그런데 object literal 기법으로 만들면 prototype 지정?
//Object.create() 로 객체를 생성하면서 원하는 prototype 을 지정해서 사용하라...
function Shape(name){
  this.name = name
}
Shape.prototype.draw = function(){
  console.log(`${this.name}을 그립니다.`)
}
let rect1 = Object.create(Shape.prototype, {
  name: {value: 'rect1'},
  width: {value:100},
  height: {value:200}
})
rect1.draw()
console.dir(rect1)