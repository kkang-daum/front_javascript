"use strict";

let data = 8
let result
if(data % 4 === 0){
  result = '4의 배수입니다.'
}else {
  result = '5의 배수가 아닙니다.'
}
console.log(result)

//위 코드를 3항 연산자로.. 
let result2 = (data % 4 === 0) ? "4의 배수입니다." : "4의 배수가 아닙니다."
console.log(result2)