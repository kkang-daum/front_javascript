"use strict"

let button = document.getElementById('button')
let table = document.getElementById('result')

button.addEventListener('click', function(){

  axios({
    method: 'get',
    url: 'http://openAPI.seoul.go.kr:8088/7962526c746b6b6133356b7a50556c/json/RealtimeCityAir/1/99/'
  }).then((response) => {
    //axios 의 경우 서버에서 넘어온 데이터가 json 문자열이면..
    //우리가 직접 object 로 전환하지 않아도 자동 전환된다..

    let rows = response.data.RealtimeCityAir.row

    let resultTxt = ''
    for(let i = 0; i < rows.length; i++){
      let name = rows[i]['MSRSTE_NM']
      let value = rows[i]['IDEX_MVL']
      let grade = rows[i]['IDEX_NM']

      resultTxt += `
        <tr>
          <td>${name}</td>
          <td>${value}</td>
          <td>${grade}</td>
        </tr>
      `
    }
    table.innerHTML = resultTxt
  })

  // let xhr = new XMLHttpRequest()
  // xhr.open('get', 'http://openAPI.seoul.go.kr:8088/7962526c746b6b6133356b7a50556c/json/RealtimeCityAir/1/99/', true)
  // xhr.onload = function(){
  //   let result = xhr.responseText
  //   let resultObj = JSON.parse(result)

  //   let rows = resultObj['RealtimeCityAir']['row']
  //   let resultTxt = ''
  //   for(let i = 0; i < rows.length; i++){
  //     let name = rows[i]['MSRSTE_NM']
  //     let value = rows[i]['IDEX_MVL']
  //     let grade = rows[i]['IDEX_NM']

  //     resultTxt += `
  //       <tr>
  //         <td>${name}</td>
  //         <td>${value}</td>
  //         <td>${grade}</td>
  //       </tr>
  //     `
  //   }
  //   table.innerHTML = resultTxt
  // }
  // xhr.send()
})