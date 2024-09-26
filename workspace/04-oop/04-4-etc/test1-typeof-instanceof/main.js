"use strict"

function User(){}
let user1 = new User()

//typeof....................................
console.log(typeof 10)//number
console.log(typeof 'hello')//string
console.log(typeof true)//boolean
console.log(typeof User)//function
console.log(typeof [10, 20])//object
console.log(typeof user1)//object

//instanceof........................
//instanceof 는 객체의 타입을 판단하기 위한 연산자이다.
//내부적으로 오른쪽의 생성자 함수의 prototype 을 판단한다..
console.log(10 instanceof Number)//false
console.log(new Number(10) instanceof Number)//true

function Car(){}
console.log(user1 instanceof User)//true
console.log(user1 instanceof Car)//false

function Shape(){}
function Rectangle(){}
//두 생성자 함수의 prototype 이 동일..
Rectangle.prototype = Shape.prototype

let shape = new Shape()
let rect = new Rectangle()
console.log(shape instanceof Shape)//true
console.log(shape instanceof Rectangle)//true
console.log(rect instanceof Shape)//true
console.log(rect instanceof Rectangle)//true

Rectangle.prototype = new Shape()
let shape1 = new Shape()
let rect1 = new Rectangle()
console.log(shape1 instanceof Shape)//true
console.log(shape1 instanceof Rectangle)//false
console.log(rect1 instanceof Shape)//true
console.log(rect1 instanceof Rectangle)//true