"use strict"

let fileNode = document.getElementById('filepicker')
let resultNode = document.getElementById('results')

fileNode.addEventListener('change', handleFile)

function handleFile(e){
  while(resultNode.firstChild){
    resultNode.removeChild(resultNode.firstChild)
  }

  let files = fileNode.files 
  if(files.length !== 0){
    for(let file of files){
      //파일의 내용을 읽어서 화면에 출력하고자 한다.. 
      //텍스트 파일과 이미지 파일의 읽고 출력하는 코드가 상이해진다.. 
      //유저가 선택한 파일의 타입에 따라 다른 코드가 실행되게.. 
      if(file.type.startsWith('text')){
        handleTextFile(file)
      }else if(file.type.startsWith('image')){
        handleImageFile(file)
      }
    }
  }
}

function handleTextFile(file){
  let liNode = document.createElement('li')
  let nameNode = document.createElement('h3')
  nameNode.innerHTML = file.name 
  liNode.appendChild(nameNode)

  //유저가 선택한 파일을 읽기... File 에서 FileReader 를 .. 
  let reader = new FileReader()

  reader.onload = function(e){
    //파일을 다 읽은 순간.. 
    let pNode = document.createElement('p')
    //파일의 엔터(\n) 도 데이터이다. html 에서는 태그에 의해서만 UI 효과..
    //\n 을 <br>로..
    //문자열.split('구분자') => 전체 문자열을 구분자로 나누어 배열로 리턴.. 
    //배열.join(구분자) => 배열의 데이터를 구분자로 연결해서 하나의 문자열로 리턴
    pNode.innerHTML = e.target.result.split('\n').join('<br/>')
    liNode.appendChild(pNode)
    resultNode.appendChild(liNode)
  }
  reader.onerror = function(e){
    //읽다가 에러가 발생한 경우.. 
    //항상 IO(file, network) 은 에러 가능성이 농후해서.. 
    let pNode = document.createElement('p')
    pNode.innerHTML = '파일 읽기에 실패 했습니다.'
    liNode.appendChild(pNode)
    resultNode.appendChild(liNode)
  }

  reader.readAsText(file)//읽기 시작.. 내용은 이벤트 콜백함수로.. 
}

function handleImageFile(file){
  let liNode = document.createElement('li')
  let nameNode = document.createElement('h3')
  nameNode.innerHTML = file.name
  liNode.appendChild(nameNode)

  let reader = new FileReader()

  reader.onload = function(e){
    let imgNode = document.createElement('img')
    imgNode.setAttribute('src', e.target.result)
    imgNode.setAttribute('width', '100')
    liNode.appendChild(imgNode)
    resultNode.appendChild(liNode)
  }

  reader.onerror = function(e){
    //읽다가 에러가 발생한 경우.. 
    //항상 IO(file, network) 은 에러 가능성이 농후해서.. 
    let pNode = document.createElement('p')
    pNode.innerHTML = '파일 읽기에 실패 했습니다.'
    liNode.appendChild(pNode)
    resultNode.appendChild(liNode)
  }
  reader.readAsDataURL(file)//base64 로 인코딩된 문자열로 읽어라.. ==>base64 문자열을
  //<img> 태그로 출력이 가능함으로.. 
}