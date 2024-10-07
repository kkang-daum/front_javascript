window.onload = function(){
  //dom node 획득..
  let button = document.getElementById('searchButton')
  let input = document.getElementById('searchTxt')
  let resultDiv = document.getElementById('result')

  button.addEventListener('click', function(){
    let url = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-10-06&to=2023-10-06&sortBy=popularity&apiKey=3dbc3796e7a64890a9bcc16373e72592`
    console.log(url)
    //ajax.....
    let xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onload = function(){
      //서버 데이터 획득..
      let result = xhr.responseText
      //네트워크 데이터이다.. json 형식의 데이터이다.. 문자열 데이터이다..
      //json 문자열을 자바스크립트 객체로 변환...
      result = JSON.parse(result)
      //데이터중에서 필요한 데이터만 획득.. 
      let articles = result['articles']
      let resultTxt = ''
      for(let i=0; i<articles.length; i++){
        let title = articles[i]['title']
        let author = articles[i]['author']
        let publishedAt = articles[i]['publishedAt']
        let urlToImage = articles[i]['urlToImage']
        let description = articles[i]['description']
        let url = articles[i]['url']

        let urlTxt = url ? `<a href='${url}' target='_blank'>more</a>` : ''

        resultTxt += `
          <div class="row">
            <div class="col-9">
              <div class="row"><h3>${title}</h3></div>
              <div class="row"><em>${author} - ${publishedAt} ${urlTxt}</em></div>
              <div class="row">${description}</div>
            </div>
            <div class="col-3">
              <img src="${urlToImage}" class="img-fluid"/>
            </div>
          </div>
          <hr class="row"/>
        `
      }
      resultDiv.innerHTML = resultTxt

    }
    xhr.send()//서버 요청이 들어가는 순간.. 
  })
}