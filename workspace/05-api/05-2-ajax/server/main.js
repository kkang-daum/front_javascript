//단순 ajax 테스트

const express = require("express");
const bodyParser = require("body-parser");


//마지막에 추가해서 테스트
const cors = require("cors");

const app = express();

//지금 테스트 구조에서.. 
//front app 의 origin 은.. 
//http://127.0.0.1:5500/05-api/05-2-ajax/test1-xhr/index.html
//back end 의 origin 은.. 
//http://localhost:3000/sum/10
//이 구조에서는 CORS 문제 발생한다.. 
//CORS 문제를 해결하기 위해서 back-end 에서 response header 에.. orgin 이 상이하더라도 통과시켜줘..
//라고 명시해야..

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

function sum(request, response, next) {
  console.log('sum..')

  // response.setHeader('Access-Control-Allow-Origin', '*');
  // response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

  //요청 url 에 있는 no 정보 획득.. 
  let no = request.params.no;
  let result = 0
  for(let i=1; i<=no; i++){
    result += i
  }

  // response.setHeader("Content-Type", "text/plain;charset=utf-8");
  //결과를 client 에게 보낸다.. response... json 데이터로..
  response.json({status: 200, result: result}); 
}

//클라이언트의 request 가 /sun/:no 로 들어온다면.. sum 함수를 실행시켜라..
//get 방식으로 요청이 들어온다면..
app.get("/sum/:no", sum);

app.post("/post_test", (request, response, next) => {
  console.log(request.body)
  response.json({status: 200, msg: 'post request success'})
})
app.get("/get_test", (request, response, next) => {
  console.log(request.query)
  response.json({status: 200, msg: 'get_test request success'})
})

app.get("/text_test", (request, response, next) => {
  console.log(`text_test, ${request.headers['accept']}`)
  response.send('text_test request success')
})

app.listen(PORT, () => {
  console.log(`1 listening at http://localhost:${PORT}`);
});
