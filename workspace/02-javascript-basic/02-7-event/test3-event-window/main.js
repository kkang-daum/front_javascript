"use strict";

let resultNode

function printResult(msg){
  resultNode.innerHTML = msg
}
addEventListener('load', () => {
  resultNode = document.getElementById('result')
  printResult('load event')
})

addEventListener('resize', () => {
  printResult(`resize, width : ${innerWidth}, height : ${innerHeight}`)
})

addEventListener('copy', (e) => {
  //유저가 복사한 문자열에 우리가 원하는 문자열을 추가하기 위해서.. 
  let thisURL = document.URL 
  //기본 이벤트 처리가 되지 않게 해주어야 한다.. 
  //복사라고 하면 우리가 이벤트 처리하지 않아도.. 자동으로 선택한 
  //문자열이 복사문자열로 저장되지만.. 그짓 못하게.. 

  //링크가 있다. 유저가 링크를 클릭한다면.. 
  //href 의 url 로 이동한다.. 
  //js 에서 이벤트 처리하지 않아도 자동으로.. 
  //브라우저의 링크 클릭 이벤트가 동작한 것이다. 이 이벤트 처리가 브라우저의 
  //링크 클릭시 기본 이벤트 처리다..

  //form submit 버튼을 클릭하면.. 
  //js 에서 이벤트 처리하지 않아도.. 브라우저는 form 의 action url 로 .. 
  //유저 입력데이터를 전송하게 되어 있다. 이게 form submit 처리하는 브라우저의 
  //기본 이벤트 처리 방식이다..

  //가끔 js 코드에서.. 이벤트 발생했을때 브라우저에 등록된 기본 이벤트 처리가 
  //안되게 해야 하는 경우가 있다. 그때 사용하는 함수다..
  e.preventDefault()
  //'text/plain', "image/*", "auido/mp3", "image/jpeg" - mime type
  //데이터 타입.. 
  //document.getSelection() - 브라우저에서 유저가 선택한 문자열.. 
  e.clipboardData.setData('text/plain', `${document.getSelection()} - 출처 : ${thisURL}`)
})
addEventListener('paste', () => {
  printResult('paste...')
})

