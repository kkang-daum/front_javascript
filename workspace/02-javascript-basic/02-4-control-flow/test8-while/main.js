"use strict";

//1~10까지 더하기..
let no = 1 
let sum = 0
while(no <= 10){
  sum += no
  no++
}
console.log(`sum : ${sum}`)

while(false){
  console.log('while body')
}

do {
  console.log('do while body')
}while(false)

let i = 1
while(i <= 9){
  console.log(`2 X ${i} = ${2*i}`)
  i++
}