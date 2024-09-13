"use strict"

let wordArray = []

let resultNode = document.getElementById('result')
let inputNode = document.getElementById('word')

function printResult(array){
  let result = ''
  array.forEach((value, index) => {
    result += `<li>${value}</li>`
  })
  resultNode.innerHTML = result
}

function addArray() {
  let word = inputNode.value
  wordArray.push(word)
  printResult(wordArray)
}
function testMap() {
  let resultArray = wordArray.map((value ) => {
    return value.toUpperCase()
  })
  printResult(resultArray)
}
function testFilter() {
  let resultArray = wordArray.filter((value) => {
    return value.length > 5
  })
  printResult(resultArray)
}
function testSort() {
  let resultArray = wordArray.sort((data1, data2) => {
    if(data1 > data2) return 1
    else if(data1 == data2) return 0
    else return -1
  })
  printResult(resultArray)
}