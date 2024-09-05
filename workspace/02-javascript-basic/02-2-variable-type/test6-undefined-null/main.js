let data1 = null
console.log(data1, `type is ${typeof data1}`)//null 'type is object'

//객체 대입..
let user1 = {
  name : '홍길동',
  age : 25,
  address : 'seoul'
}
let user2 = null 
console.log(typeof user1, typeof user2)//object object

//undefined......................
let data2;
console.log(data2, typeof data2)//undefined 'undefined'

//error..............
// console.log(data3)//ReferenceError: data3 is not defined

// user2.name = '김길동'//TypeError: Cannot set properties of null (setting 'name')

let user4
user4.name = '김길동'