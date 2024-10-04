"use strict"

const numNode = document.getElementById('num')
const resultNode = document.getElementById('result')

function sum(){
  //버튼 클릭 이벤트 함수.. 
  //유저 입력 데이터를 받아, 서버 요청.. 
  //서버 요청을 비동기로 하고 싶다..  - 결과 획득까지 대기상태가 되지 않게..
  // - 서버 응답에 의해 화면이 refresh 되지 않게 하고 싶다..
  //==>ajax 로 비동기 요청.. 결과를 데이터적으로 받아서 화면 업데이트..

  //xhr 생성..
  let xhr = new XMLHttpRequest()
  //요청 정보 설정.. 
  //첫번째 매개변수 - http request method : get/post/put/delete/fetch
  //두번째 매개변수 - url
  xhr.open('get', `http://localhost:3000/sum/${numNode.value}`, true)
  //요청.. 
  xhr.send()
  //결과를 받기 위한 콜백 함수 등록.. 
  xhr.onload = function(){
    if(xhr.status === 200){
      //http response 상태 코드 값이 200인 경우에만 => 서버 실행 성공..
      //서버에서 넘어오는 데이터는 모두 문자열이다..
      //일반 문자열, json 문자열, xml 문자열.. 
      //json 문자열을 javascript object literal 로 변형해서 핸들링.. 
      let data = JSON.parse(xhr.responseText)
      //서버 데이터 화면 출력..
      resultNode.innerHTML = data.result//서버에서 result 에 결과 데이터를 담아서 전달
      //함으로.. 
    }
  }
}