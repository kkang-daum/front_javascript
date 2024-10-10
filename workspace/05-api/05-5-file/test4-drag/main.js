"use strict"

async function upload(files){
  if(files.length !== 0){
    let formData = new FormData()
    for(let file of files){
      formData.append('file', file)
    }
    let resp = await axios.post('http://localhost:8000/upload', formData)
    if(resp.data.status === 200){
      alert('upload ok')
    }
  }
}

function dropHandler(e){
  //브라우저의 기본 이벤트 처리 금지.. 
  e.preventDefault()
  //drop 한 파일 정보를 추출해서.. upload 함수 호출.. 
  upload(e.dataTransfer.files)
}
function dragOverHandler(e){
  e.preventDefault()
}