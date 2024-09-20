"use strict";

//innerHTML vs innerText.......................
//둘다 특정 노드의 바디를 지칭하는데 차이가 있다.. 

//특정 노드에 바디를 획득하고자 한다..
let oneNode = document.getElementById('one')
console.log(oneNode.innerHTML)//hello
console.log(oneNode.innerText)//hello

let twoNode = document.getElementById('two')
console.log(twoNode.innerHTML)//<a href="#">google</a>
console.log(twoNode.innerText)//google

//특정 노드의 바디에 문자열을 추가해서 출력하고자 한다...
let result1 = document.getElementById('result1')
let result2 = document.getElementById('result2')
//동적 문자열이지만 innerHTML 로 지정한 문자열을 html parser가 파싱을 한다.
//태그가 포함되어 있다면 태그 효과를 적용한다..
result1.innerHTML = '<a href="#">google</a>'
//동적 문자열 내에 태그가 있다고 하더라도 태그로 인지하지 않고 화면에 출력해야할
//문자열로 인지.. 태그가 화면에 출력..
result2.innerText = '<a href="#">google</a>'


//속성 핸들링..................................
let link1 = document.getElementById('link1')
//속성 값 획득.. 
console.log(link1.href)//http://www.google.com/
console.log(link1.getAttribute('href'))//http://www.google.com

//속성 변경.. 
let link2 = document.getElementById('link2')
// link2.href = 'http://www.naver.com'//ok...
link2.setAttribute('href', 'http://www.naver.com')

//속성 제거.. 
let link3 = document.getElementById('link3')
link3.removeAttribute('href')
console.log(link3.hasAttribute('href'))//false