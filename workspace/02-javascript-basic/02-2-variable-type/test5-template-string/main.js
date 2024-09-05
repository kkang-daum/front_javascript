let name = '홍길동'
const calSum = (no) => {
  let sum = 0
  for(i=1; i<=no; i++){
    sum += i
  }
  return sum
}

//문자열 데이터.. 여러라인.. 
// let a = 'hello 
// world'

//js code 적으로는 개행에 의한 데이터(\n)이 유지되지만..
//html 에서는 모든 화면은 태그..
// let a = `
//   hello <br/>
//   world
// `

document.write(`
  안녕하세요 ${name}님, 함수 호출 결과는 ${calSum(10)}, ${10 + 20}
`)

//template string 의 ${}에는 expression code 만 가능하다.
//아래처럼 statement 코드는 불가능 하다.
// let a = `
//   ${let data = 10}
// `