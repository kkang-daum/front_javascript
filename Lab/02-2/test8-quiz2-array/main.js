"use strict";

let countNode = document.getElementById('count')
let resultNode = document.getElementById('result')

//members 라는 배열 변수 선언


//화면에 배열의 결과를 출력하는 함수
function printResult(){
  countNode.innerHTML = members.length;
  let resultTxt = ''
  members.forEach((value) => {
    resultTxt += `<li>${value}</li>`;
  })
  resultNode.innerHTML = resultTxt;
}

function addMember(){
  //이름을 입력받아 배열에 추가
  
  printResult()
}
function deleteMember() {
  //배열에서 멤버 제거
  
  printResult()
}

printResult()