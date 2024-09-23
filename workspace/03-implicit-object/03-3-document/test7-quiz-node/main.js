"use strict";

let button = document.getElementById('button')
let title = document.getElementById('title')
let list = document.getElementById('list')

button.addEventListener('click', function(e){
  e.preventDefault()

  let newItem = document.createElement('li')
  let newText = document.createTextNode(title.value)
  newItem.appendChild(newText)

  list.insertBefore(newItem, list.childNodes[0])

  title.value = ''

  newItem.addEventListener('click', function(){
    list.removeChild(this)
  })

})