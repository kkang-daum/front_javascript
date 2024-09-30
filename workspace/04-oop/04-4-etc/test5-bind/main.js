"use strict"

let obj1 = {
  name: '홍길동'
}
//생성자 함수가 아닌이상.. 혹은 어떤 객체에 동작 바인딩 되어 실행될
//함수가 아닌 이상.. 함수내에 this 는 안쓰는게 좋다..
let sayHello = function(){
  console.log(`Hello, ${this.name}`)
}
// sayHello()//error...

//==>위 객체와 함수는 별개이다..
//의도하에.. 함수를 obj1 객체 안에 선언된 것처럼 돌리고 싶다..
let newFun = sayHello.bind(obj1)
newFun()//Hello, 홍길동

//apply, call........................................
//함수를 만들자 마자 호출까지.. 
let sayHello1 = function(arg1, arg2){
  console.log(`Hello, ${this.name}, ${arg1}, ${arg2}`)
}
sayHello1.call(obj1, 10, 20)//Hello, 홍길동, 10, 20
sayHello1.apply(obj1, [10, 20])//Hello, 홍길동, 10, 20


//사례...........................
//어떤 함수가 있고, 객체가 있고... 
//함수가 객체의 멤버로 준비되지 않은 별개의 함수이지만.. 
//마치 자신의 멤버로 등록된 함수처럼 사용하고 싶다.................

//배열....
let array = ['orange','yellow', 'green']
array.push('black')
array.push('white')
console.log(array.shift())//orange
console.log(array.pop())//white
console.log(array)//['yellow', 'green', 'black']

//객체를 만들고 싶다.. 유사 배열 객체를.. 배열처럼 보이는... 
let myArray = {
  0: 'orange',
  1: 'yellow',
  2: 'green',
  length:3,
  push: function(e){
    //마지막 index 에 e 값을 추가.. 
    this[this.length] = e
    this.length++
  },
  pop: function(){
    //마지막 index 데이터 제거, 반환.. 
    let last = this[this.length - 1]
    this.length--
    delete this[this.length]
    return last
  },
  shift: function(){
    //맨 앞에꺼 제거, 반환..
    let first = this[0]
    for(let i=0; i<this.length-1; i++){
      this[i] = this[i+1]
    }
    this.length-- 
    delete this[this.length]
    return first
  }
}
myArray.push('black')
myArray.push('white')
console.log(myArray.shift())//orange
console.log(myArray.pop())//white
console.log(myArray)//{0: 'yellow', 1: 'green', 2: 'black'


//유사 배열 객체를 만들면서.. 배열에 있는 필요한 함수를 직접 알고리즘으로 구현했다..
//Array 에 push, pop, shift 함수가 있지 않나? Array 에 선언된 함수이지만..
//마치 나의 객체에 있는 함수처럼 연결해서 사용하면 되지 않나?
let myArray2 = {
  0: 'orange',
  1: 'yellow',
  2: 'green',
  length:3,
  push: function(e){
    Array.prototype.push.call(this, e)
  },
  pop: function(){
    return Array.prototype.pop.call(this)
  },
  shift: function(){
    return Array.prototype.shift.call(this)
  }
}
myArray2.push('black')
myArray2.push('white')
console.log(myArray2.shift())//orange
console.log(myArray2.pop())//white
console.log(myArray2)//{0: 'yellow', 1: 'green', 2: 'black'