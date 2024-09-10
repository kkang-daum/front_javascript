"use strict";

const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");

  //어떤 수가 소수인지를 판단, 2부터 증가시셔서 나누어야 한다. ==> loop
  //2부터 입력받은 수까지 증가시키면서 소수인지를 판단한다. ==>loop
  
  //결과에 따라 출력 메시지가 다르다.. 일단 변수 하나 선언하고..
  let message = ''

  if(no !== null){
    //입력한 숫자에 따라 소수가 2, 3, 10개일수도 있다..
    //코드 작성 시점에 몇개의 데이터가 나올지 예측이 안된다..
    //그런 데이터 담으라고 배열이 있는거다..
    //결과를 담기 위한 배열을 하나 선언해 놓는다..
    let results = []

    //2부터 입력한 숫자까지 증가시켜서.. 각 숫자가 소수인지 판단..
    for(let i = 2; i < no; i++){
      //각 숫자가 소수일수도 있고 아닐수도 있고.. 그 결과를 담기위한 boolean 변수..
      let isPrimeNumber = true;

      //소수인지 판단하기 위해서.. 나누기 위한 숫자.. 
      let divisor = 2
      while(divisor < i){
        if(i % divisor === 0){
          isPrimeNumber = false;
          break
        }else {
          divisor++
        }
      }
      if(isPrimeNumber){
        results.push(i)
      }
    }
    message = `입력하신 ${no} 까지의 소수는 ${results} 입니다.`
  }else {
    //no == null, 유저가 취소 버튼을 누른경우..
    message = '장난 치십니까?' 
  }

  
  document.querySelector("#result").innerHTML = message;
};
