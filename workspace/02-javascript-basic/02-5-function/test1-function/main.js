//test1... 함수 선언 및 이용...... 
console.log('step1')
//아래는 함수의 선언구문이지 실행구문이 아니다..
//선언자체로 함수의 body 가 실행되지는 않는다..
//어디선가 이 함수를 호출해야 실행된다..
function myFun1(){
  console.log('execute function body')
}
console.log('step2')
//함수가 호출이 되면 함수부분이 모두 실행이 끝나야 밑줄이 실행된다.
myFun1()
console.log('step3')
//함수는 일종의 코드 재사용이다.. 
//함수를 하나 선언하고.. 그 함수의 업무가 필요한 곳에서 반복 호출(재사용)
myFun1()

//argument, return value.................
function myFun2(arg1, arg2){
  console.log(`arg1 : ${arg1}, arg2 : ${arg2}`)
  if(arg1 < arg2){
    return arg1
  }else {
    return arg2
  }
}
let result = myFun2(10, 20)
console.log(result)
myFun2()//arg1 : undefined, arg2 : undefined
myFun2(10)//arg1 : 10, arg2 : undefined

//default parameter.....................
function myFun3(arg1, arg2 = 0){
  console.log(`arg1 : ${arg1}, arg2 : ${arg2}`)
}
console.log('``````````````')
myFun3()//arg1 : undefined, arg2 : 0
myFun3(10)//arg1 : 10, arg2 : 0
myFun3(10, 20)//arg1 : 10, arg2 : 20

//rest parameter..............
function myFun4(arg1, ...arg2){
  console.log(arg1)
  //rest parameter 는 배열... 
  if(arg2.length > 0){
    for(let i = 0; i< arg2.length; i++){
      console.log(`arg2[${i}] = ${arg2[i]}`)
    }
  }
}
myFun4(10, 20)//arg2[0] = 20
myFun4(10, 20, 30, 40, 50)