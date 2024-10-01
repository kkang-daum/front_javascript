"use strict";

// function Member(id, nickname, photo){
//   this.id = id
//   this.nickname = nickname
//   this.photo = photo
// }

class Member {
  constructor(id, nickname, photo) {
    this.id = id
    this.nickname = nickname
    this.photo = photo
  }
}

// function Emoji(emojiId){
//   this.emojiId = emojiId
//   this.count = 0
//   this.members = []
//   Emoji.prototype.add = function(memberId){
//     this.count++
//     this.members.push(memberId)
//   }
// }

class Emoji {
  constructor(emojiId) {
    this.emojiId = emojiId
    this.count = 0
    this.members = []
  }

  //클래스의 static 과 생성자 함수의 prototype 은 다르다..
  //객체 생성의 메모리에 매번 할당 되지 않는다는 공통점만 있지.. 이용 및 목적이 다르다
  //prototype 은 객체로 이용.. 
  //static 은 객체로 이용 불가.. 클래스명으로 이용.. 

  //클래스내에 함수를 선언할때..
  //선언식으로 추가하거나 표현식으로 추가하거나..
  //선언식으로 추가하면 내부적으로는 prototype 에 , 추가
  //표현식으로 추가하면 객체 메모리에 추가..
  add(memberId) {
    this.count++
    this.members.push(memberId)
  }
}

// function Message(msg, member){
//   this.msgId = ++msgId
//   this.msg = msg
//   this.member = member
//   this.date = new Date().toLocaleString()
//   this.emojis = []
//   Message.prototype.addEmoji = function(emojiId, memberId){
//     if (this.emojis.every(item => item.emojiId !== emojiId)) {
//       let emoji = new Emoji(emojiId)
//       emoji.add(memberId)
//       this.emojis.push(emoji)
//     }else {
//       let index = this.emojis.findIndex((item) => item.emojiId === emojiId)
//       this.emojis[index].add(memberId)
//     }
//   }
// }

class Message {
  constructor(msg, member) {
    this.msgId = ++msgId
    this.msg = msg
    this.member = member
    this.date = new Date().toLocaleString()
    this.emojis = []
  }
  addEmoji(emojiId, memberId) {
    if (this.emojis.every(item => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId)
      emoji.add(memberId)
      this.emojis.push(emoji)
    } else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId)
      this.emojis[index].add(memberId)
    }
  }
}

let messages = []
let msgId = 0


let nicknameInputNode = document.getElementById('nicknameInput')
let idInputNode = document.getElementById('idInput')
let msgInputNode = document.getElementById('msgInput')
let chatMainNode = document.getElementById('chat-main')

function printMessage(message) {
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
function send(e) {
  e.preventDefault()

  let id = idInputNode.value
  let nickname = nicknameInputNode.value
  let msg = msgInputNode.value

  if (id.trim().length == 0 || nickname.trim().length == 0 || msg.trim().length == 0) {
    alert('아이디, 닉네임과 메시지를 입력해야 합니다.')
    return;
  } else {
    idInputNode.value = ''
    nicknameInputNode.value = ''
    msgInputNode.value = ''

    let member = new Member(id, nickname, `images/${id}.jpg`)

    let message = new Message(msg, member)

    messages.push(message)

    printMessage(message)
  }

}

function printEmoji(message) {
  let emojis = message.emojis
  if (emojis.length > 0) {
    let messageBubble = document.querySelector(`#msgId-${message.msgId} .msg-bubble`)
    let emojiNode = messageBubble.querySelector('.emojis')
    if (emojiNode) {
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

function emojiClick(msgId, emojiId) {

  let memberId = prompt('멤버 id 를 입력해 주세요')
  if (memberId == null) {
    alert('입력을 하지 않았습니다.')
  } else {
    let index = messages.findIndex((item) => item.msgId == msgId)
    messages[index].addEmoji(emojiId, memberId)

    printEmoji(messages[index])
  }
}
