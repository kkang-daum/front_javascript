"use strict";

window.addEventListener('load', () => {
  //click, dblclick, down, up................
  let button = document.getElementById('button')
  button.addEventListener('click', () => {
    console.log('mouse click')
  })
  button.addEventListener('dblclick', () => {
    console.log('mouse double click')
  })
  button.addEventListener('mousedown', () => {
    console.log('mouse down')
  })
  button.addEventListener('mouseup', () => {
    console.log('mouse up')
  })

  //mouse move..............................
  let area = document.getElementById('area')
  let result = document.getElementById('result')

  area.addEventListener('mousemove', (e) => {
    result.innerHTML = `offset(${e.offsetX},${e.offsetY}, page(${e.pageX},${e.pageY}))`
  })

  //enter, over..................
  let outer = document.getElementById('outer')
  let inner = document.getElementById('inner')

  outer.addEventListener('mouseenter', () => {
    console.log('outer mouseenter')
  })
  inner.addEventListener('mouseenter', () => {
    console.log('inner mouseenter')
  })
  outer.addEventListener('mouseover', () => {
    console.log('outer mouseover')
  })
  inner.addEventListener('mouseover', () => {
    console.log('inner mouseover')
  })
})