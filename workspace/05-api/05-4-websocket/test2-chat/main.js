"use strict";

function Member(id, nickname, photo){
  this.id = id
  this.nickname = nickname
  this.photo = photo
}

function Emoji(emojiId){
  this.emojiId = emojiId
  this.count = 0
  this.members = []
  this.add = function(memberId){
    this.count++
    this.members.push(memberId)
  }
}

function Message(msg, member){
  // this.msgId = ++msgId
  this.msg = msg
  this.member = member
  this.date = new Date().toLocaleString()
  this.emojis = []
  this.addEmoji = function(emojiId, memberId){
    if (this.emojis.every(item => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId)
      emoji.add(memberId)
      this.emojis.push(emoji)
    }else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId)
      this.emojis[index].add(memberId)
    }
  }
}

let messages = []
//실제 채팅이 되게 할것이다.. 각각의 메시지를 구분하기 위한 id 이다..
//server 에서 유지해야 하는 데이터이다..
// let msgId = 0

//클라이언트 정보.. 현 창을 이용하는 멤버 정보.. connect 시에 초기화.. 
let member;
//서버 연결 정보.. 
let webSocket 



let nicknameInputNode = document.getElementById('nicknameInput')
let idInputNode = document.getElementById('idInput')
let msgInputNode = document.getElementById('msgInput')
let chatMainNode = document.getElementById('chat-main')
//입력 form 노드... 
let nicknameForm = document.getElementById('nicknameForm')
let msgForm = document.getElementById('msgForm')

function printMessage(message){
  let menuImageNode = document.createElement('img')
  menuImageNode.setAttribute('src', 'images/menu.jpg')
  let menuButton = document.createElement('button')
  menuButton.setAttribute('class', 'msg-info-menu dropbtn')
  menuButton.appendChild(menuImageNode)

  let link1 = document.createElement('a')
  link1.setAttribute('href', '#')
  link1.setAttribute('onclick', `emojiClick('${message.msgId}','thumbup')`)
  let link1Text = document.createTextNode('좋아요')
  link1.appendChild(link1Text)

  let link2 = document.createElement('a')
  link2.setAttribute('href', '#')
  link2.setAttribute('onclick', `emojiClick('${message.msgId}','ok')`)
  let link2Text = document.createTextNode('넵')
  link2.appendChild(link2Text)

  let links = document.createElement('div')
  links.setAttribute('class', 'dropdown-content')
  links.appendChild(link1)
  links.appendChild(link2)

  let dropdown = document.createElement('div')
  dropdown.setAttribute('class', 'dropdown')
  dropdown.appendChild(menuButton)
  dropdown.appendChild(links)

  let name = document.createElement('div')
  name.setAttribute('class', 'msg-info-name')
  name.appendChild(document.createTextNode(message.member.nickname))

  let date = document.createElement('div')
  date.setAttribute('class', 'msg-info-time')
  date.appendChild(document.createTextNode(message.date))

  let msgInfo = document.createElement('div')
  msgInfo.setAttribute('class', 'msg-info')
  msgInfo.appendChild(name)
  msgInfo.appendChild(date)
  msgInfo.appendChild(dropdown)

  let msgText = document.createElement('div')
  msgText.setAttribute('class', 'msg-text')
  msgText.appendChild(document.createTextNode(message.msg))

  let msgBubble = document.createElement('div')
  msgBubble.setAttribute('class', 'msg-bubble')
  msgBubble.appendChild(msgInfo)
  msgBubble.appendChild(msgText)

  let photoNode = document.createElement('img')
  photoNode.setAttribute('src', message.member.photo)
  photoNode.setAttribute('class', 'msg-img')

  let mainNode = document.createElement('div')
  mainNode.setAttribute('id', `msgId-${message.msgId}`)
  mainNode.setAttribute('class', 'msg left-msg')
  mainNode.appendChild(photoNode)
  mainNode.appendChild(msgBubble)

  chatMainNode.appendChild(mainNode)
}

function connect(e){
  e.preventDefault()
  //유저 입력 데이터 획득.. 
  let id = idInputNode.value 
  let nickname = nicknameInputNode.value 
  //유효성 검증.. 
  if(id.trim().length == 0 || nickname.trim().length == 0){
    alert('아이디, 닉네임을 입력해야 합니다.')
    return;
  }else {
    //유저 입력 데이터 화면 삭제..
    idInputNode.value = ''
    nicknameInputNode.value = ''

    member = new Member(id, nickname, `images/${id}.jpg`)
    //서버 연결.. 
    webSocket = new WebSocket('ws://localhost:3000')

    webSocket.onmessage = onMessage 
  }
}

function send(e){
  e.preventDefault()

  // let id = idInputNode.value 
  // let nickname = nicknameInputNode.value
  let msg = msgInputNode.value

  // if(id.trim().length == 0 || nickname.trim().length == 0 || msg.trim().length == 0){
  if(msg.trim().length == 0){
    alert('메시지를 입력해야 합니다.')
    return;
  }else {
    // idInputNode.value = ''
    // nicknameInputNode.value = ''
    msgInputNode.value = ''

    // let member = new Member(id, nickname, `images/${id}.jpg`)

    let message = new Message(msg, member)

    //메시지 데이터 유지 및 화면 출력은 서버에서 메시지를 받은 순간.. 
    // messages.push(message)

    // printMessage(message)

    //message 객체에 변수 추가.. 메시지를 구분하기 위해서.. 
    //msg, emoji
    message.gubun = 'msg'
    //서버 전송.. 
    webSocket.send(JSON.stringify(message))
  }

}

function printEmoji(message){
  let emojis = message.emojis
  if(emojis.length > 0){
    let messageBubble = document.querySelector(`#msgId-${message.msgId} .msg-bubble`)
    let emojiNode = messageBubble.querySelector('.emojis')
    if(emojiNode){
      messageBubble.removeChild(emojiNode)
    }

    let emojisNode = document.createElement('div')
    emojisNode.setAttribute('class', 'emojis')

    emojis.forEach((emoji) => {
      let img = document.createElement('img')
      img.setAttribute('class', 'emoji dropbtn')
      img.setAttribute('src', `images/${emoji.emojiId}.jpg`)

      let span = document.createElement('span')
      let nicknameTxt = emoji.members.join(',')
      span.appendChild(document.createTextNode(nicknameTxt))

      let dropdownContent = document.createElement('div')
      dropdownContent.setAttribute('class', 'dropdown-content')
      dropdownContent.appendChild(span)

      let dropdown = document.createElement('div')
      dropdown.setAttribute('class', 'dropdown')
      dropdown.appendChild(img)
      dropdown.appendChild(dropdownContent)

      let span2 = document.createElement('span')
      span2.setAttribute('class', 'emoji-count')
      span2.appendChild(document.createTextNode(`${emoji.count}`))

      emojisNode.appendChild(dropdown)
      emojisNode.appendChild(span2)
    })

    messageBubble.appendChild(emojisNode)
  } 

}

function emojiClick(msgId, emojiId){

  // let memberId = prompt('멤버 id 를 입력해 주세요')
  // if(memberId == null){
  //   alert('입력을 하지 않았습니다.')
  // }else {
  //   let index = messages.findIndex((item) => item.msgId == msgId)
  //   messages[index].addEmoji(emojiId, memberId)

  //   printEmoji(messages[index])
  // }

  //서버에 전송하기 위한 이모지 객체
  let emoji = new Emoji(emojiId)
  emoji.memberId = member.id 
  emoji.msgId = msgId 
  emoji.gubun = 'emoji'
  //서버 전송.. 
  webSocket.send(JSON.stringify(emoji))
}

function onMessage(event){
  //서버 데이터 획득.. object literal 로 변환.. 
  let serverData = JSON.parse(event.data)
  if(serverData.gubun === 'connect'){
    if(serverData.state === 'ok'){
      nicknameForm.style.display = 'none'
      msgForm.removeAttribute('style')
    }else {
      alert('서버 연결에 실패 했습니다.')
    }
  }else if(serverData.gubun === 'msg'){
    let message = new Message(serverData.msg, serverData.member)
    message.msgId = serverData.msgId
    messages.push(message)
    printMessage(message)
  }else if(serverData.gubun === 'emoji'){
    let index = messages.findIndex((item) => item.msgId == parseInt(serverData.msgId))
    messages[index].addEmoji(serverData.emojiId, serverData.memberId)
    printEmoji(messages[index])
  }
}