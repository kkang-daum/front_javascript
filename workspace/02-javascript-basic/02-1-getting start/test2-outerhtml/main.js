const myButtonClick = () => {
  let title = document.getElementById('title')
  if(title.style.backgroundColor === 'yellow'){
    title.style.backgroundColor = 'pink'
  }else {
    title.style.backgroundColor = 'yellow'
  }
}