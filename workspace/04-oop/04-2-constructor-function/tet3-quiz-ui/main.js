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
  this.msgId = ++msgId
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

//전체 채팅 메시지가 저장되는 배열, Message 객체 여러개가 저장
let messages = []
//채팅 메시지를 식별해야 이모지를 어디다 추가할건지가 결정될 수 있어서..
//1씩 증가시켜서.. 신규 발생 채팅 메시지 식별자 id(msgId)로 사용하기 위해서..
let msgId = 0


//필요한 dom node 객체 획득.. 
let nicknameInputNode = document.getElementById('nicknameInput')
let idInputNode = document.getElementById('idInput')
let msgInputNode = document.getElementById('msgInput')
//최종 동적으로 양산된 채팅 글이 찍힐 위치..
let chatMainNode = document.getElementById('chat-main')

//매개변수로 전달된 객체의 내용을 node 를 만들어서 출력시키는 역할.. 
function printMessage(message){
  //dropdown menu..........................
  let menuImageNode = document.createElement('img')
  menuImageNode.setAttribute('src', 'images/menu.jpg')
  let menuButton = document.createElement('button')
  menuButton.setAttribute('class', 'msg-info-menu dropbtn')
  menuButton.appendChild(menuImageNode)

  let link1 = document.createElement('a')
  link1.setAttribute('href', '#')
  //첫번째 - 이모지 추가 메시지 id, 두번째 - 추가해야 하는 이모지 id
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

  //main data.....................
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

  //msg - text ...................
  let msgText = document.createElement('div')
  msgText.setAttribute('class', 'msg-text')
  msgText.appendChild(document.createTextNode(message.msg))

  let msgBubble = document.createElement('div')
  msgBubble.setAttribute('class', 'msg-bubble')
  msgBubble.appendChild(msgInfo)
  msgBubble.appendChild(msgText)

  //프사..............
  let photoNode = document.createElement('img')
  photoNode.setAttribute('src', message.member.photo)
  photoNode.setAttribute('class', 'msg-img')

  //화면에 메시지는 여러개 추가된다..
  //각 div 태그를 id 로 식별해야 나중에 그 메시지에 이모지
  //추가시 어느 div 에 출력해야 하는지 식별할 수 있다..
  let mainNode = document.createElement('div')
  mainNode.setAttribute('id', `msgId-${message.msgId}`)
  mainNode.setAttribute('class', 'msg left-msg')
  mainNode.appendChild(photoNode)
  mainNode.appendChild(msgBubble)

  chatMainNode.appendChild(mainNode)
}
function send(e){
  //유저 입력 데이터 추출.... 
  e.preventDefault()

  let id = idInputNode.value 
  let nickname = nicknameInputNode.value
  let msg = msgInputNode.value

  //유효성 검증..
  if(id.trim().length == 0 || nickname.trim().length == 0 || msg.trim().length == 0){
    alert('아이디, 닉네임과 메시지를 입력해야 합니다.')
    return;
  }else {
    //유저 입력 데이터 화면에서 삭제..
    idInputNode.value = ''
    nicknameInputNode.value = ''
    msgInputNode.value = ''

    //메시지 입력 유저를 표현하는 객체 생성..
    //프사는 유저 id 와 동일한 파일명.. 
    let member = new Member(id, nickname, `images/${id}.jpg`)

    //메시지 객체 생성..
    let message = new Message(msg, member)

    messages.push(message)

    //메시지를 화면 출력.. 
    printMessage(message)
  }
  //화면에 동적 노드 만들어서 출력..

}

function printEmoji(message){
  //하나의 메시지에 이모지는 여러개 추가되었을 수도..
  let emojis = message.emojis
  if(emojis.length > 0){
    //이모지가 출력되어야 하는 노드를 획득해야 한다..
    let messageBubble = document.querySelector(`#msgId-${message.msgId} .msg-bubble`)
    //이모지가 기존에 추가된 것이 있을 수도 있고 없을 수도 있고
    let emojiNode = messageBubble.querySelector('.emojis')
    if(emojiNode){
      //기존에 이모지 추가된 것이 있는 상황.. 
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

//이모지 추가 클릭 이벤트 처리...
function emojiClick(msgId, emojiId){
  //동적으로 이모지를 메시지에 출력..

  //서버와 연동된다면 이모지 출력 유저의 id 는 고정되지만..
  //지금은 로컬 테스트임으로 
  //이모지 추가 유저 id 를 테스트를 위해서 prompt 로 받아들인다..
  let memberId = prompt('멤버 id 를 입력해 주세요')
  if(memberId == null){
    alert('입력을 하지 않았습니다.')
  }else {
    //화면에 메시지는 많다.. 모든 메시지의 이모지 추가 클릭하면..
    //이 함수가 호출된다..
    //결국 어느 메시지에서 이모지를 클릭한 것인지가 식별되어야 해서
    //html 을 준비할때 매개변수로.. msgId 를 받아들인 것이다.

    //msgId 로 배열에서 이모지를 추가하고자 하는 메시지 객체를 획득
    let index = messages.findIndex((item) => item.msgId == msgId)
    messages[index].addEmoji(emojiId, memberId)

    //해당 메시지에 이모지 추가, 화면 출력.. 
    printEmoji(messages[index])
  }
}
