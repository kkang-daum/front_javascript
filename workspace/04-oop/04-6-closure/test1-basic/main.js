"use strict"

//test1........execution context...................
let x = 10

// function oneFun(){
//   let y = 20
//   console.log(x, y)
// }

// function twoFun(){
//   let z = 30
//   console.log(x, z)
// }

// console.log(x)

// oneFun()

// twoFun()

// console.log(x)

//outerFun 내의 innerFun 이 선언되어 있고..
//innerFun 에서 outerFun 의 정보를 이용하고 있지만(lexical 정보)
//execution context 정보만으로 충분함으로.. closuer 는 필요가 없는 상황..
// function outerFun(){
//   let y = 20

//   function innerFun(){
//     let z = 30
//     console.log(x, y, z)
//   }
//   innerFun()
// }

// outerFun()

//closure 가 필요한 상황...
//함수의 lexical 정보가 따로 유지되어야 하는 상황..
function outerFun(){
  let y = 20

  function innerFun(){
    let z = 30
    console.log(x, y, z)
  }
  return innerFun
}

let resultFun = outerFun()
resultFun()