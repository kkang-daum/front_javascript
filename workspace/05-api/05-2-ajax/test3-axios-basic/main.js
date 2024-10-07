"use strict"

function printResult(result){
  const resultDom = document.getElementById('result')
  resultDom.innerHTML = result
}

function axios_basic(){
  const num = document.getElementById('num').value 
  axios({
    method: 'get',
    //로컬 컴퓨터를 지칭하는 ip : 127.0.0.1
    //로컬 컴퓨터를 지칭하는 도메인 : localhost
    url: `http://localhost:3000/sum/${num}`
  })
  .then(response => {
    printResult(response.data.result)
  })
}
function axios_get(){
  const num = document.getElementById('num').value 
  axios.get(`http://localhost:3000/sum/${num}`)
  .then(response => {
    printResult(response.data.result)
  })
}
function axios_post(){
  //http request method
  //header 정보 - get(default), post, put, delete, patch, head, option
  //CRUD - create(새로운 데이터 발생, 저장), read, update, delete
  //get - 데이터줘.. read/ 만약 데이터를 서버에 넘기겠다면.. header 정보로 넘기는 방식
  //      url 에 데이터를 추가해서.. url 은 request header 정보이다..
  //      url path 에 추가해서 넘기거나.. ~~~/sum/10
  //      url search 문자열(query 문자열) ~~~~/sum?a1=10&name=kim
  //post - 데이터 저장 - create
  //  서버에 데이터 전송을 request body 에 추가해서 전달하겠다.. 
  //  body 에 담기는 데이터 형식의 규약은 없다..(문자열, search문자열, json 문자열)
  //put - 데이터 수정 - update
  //delete - 데이터 삭제 - delete
  axios.post(`http://localhost:3000/post_test`, {
    //post 방식이다.. request body 데이터.. 
    name: '홍길동',
    age: 20
  })
  .then(response => {
    printResult(response.data.msg)
  })
}
