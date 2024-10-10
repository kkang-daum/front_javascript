"use strict"

let button = document.getElementById('button')
let fileNode = document.getElementById('filepicker')
let titleNode = document.getElementById('title')

async function upload(e) {
  //form 의 기본 이벤트 처리되지 않게.. 
  e.preventDefault()

  let title = titleNode.value 
  let files = fileNode.files 

  if(files.length !== 0){
    //FormData 로 서버에 전송할 데이터를 구성.. 
    //File 이외에 일반 데이터도 FormData 에 추가 가능.. 
    let formData = new FormData()
    for(let file of files){
      formData.append('file', file)//'file' 추가된 데이터 식별자.. 
    }
    formData.append('title', title)

    //file upload - post 방식.. 
    let resp = await axios.post('http://localhost:8000/upload', formData)
    if(resp.data.status === 200){
      alert('upload ok')
    }
  }
}

button.addEventListener('click', upload)