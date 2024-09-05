"use strict";

let data = 10
console.log(data, 'type is', typeof data)//10 'type is' 'number'
data = '홍길동'
console.log(data, 'type is', typeof data)
data = true
console.log(data, 'type is', typeof data)
data = 10.0
console.log(data, 'type is', typeof data)
data = '10'
console.log(data, 'type is', typeof data)

let data1 = 10
let data2 = 20
let data3 = '10'
let data4 = '20'

console.log(data1 + data2)//30
console.log(data3 + data4)//1020
console.log(data1 + data3)//1010