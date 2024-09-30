"use strict"

// let obj = {
//   //이 값이 변경되는 순간 운용 로그를 남겨야 한다는 유지보수 사항이 발생했다면..
//   setNum: (value) => {
//     console.log(`어디선가 값 변경을 시도합니다.`)
//     //~~~~
//   }
// }
// obj.setNum(20)
// console.log(obj.num)

let obj = {
  _num: 0,
  get num(){
    return this._num
  },
  set num(value){
    console.log('운용로그를 남깁니다.')
    this._num = value
  }
}
obj.num = 20
console.log(obj.num)//20