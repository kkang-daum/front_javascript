"use strict";

/*
메시지
  글 내용
  시간
  멤버
    멤버 이름
    멤버 아이디
    멤버 프로필사진
  이모지들(array)
    이모지 아이디
    이모지 카운트
    이모지 추가한 멤버들
    멤버 추가 함수

  이모지 추가 함수
*/

let message = {
  msg: '디버깅 용도로 많이 사용합니다.',
  date: '2024.09.04 오전 10:32',
  member: {
    id: 'jangyj',
    nickname: '장유진',
    photo: 'jangyj.png'
  },
  emojis: [
    {
      id: 'thumbsup',
      count: 3,
      members: ['jska2w3', 'donghyanoh', 'idoyeong5696'],
      add: function (id) {
        this.count++
        this.members.push(id)
      }
    }
  ],
  addEmoji: function (emojiId, memberId) {
    if (this.emojis.every(item => item.id !== emojiId)) {
      //신규 이모지 추가.. 
      this.emojis.push({
        id: emojiId,
        count: 1,
        members: [memberId],
        add: function (id) {
          this.count++
          this.members.push(id)
        }
      })
    }else {
      //기존에 추가되어 있던 이모지를 누군가가 추가시키고자..
      //배열에서 이 이미지 id 의 객체가 몇번째 있는지 획득..
      let index = this.emojis.findIndex((item) => item.id === emojiId)
      this.emojis[index].add(memberId)
    }
  }
}

console.log(message)

//기존 이모지에 kim 이 추가했다고 가정..
message.addEmoji('thumbsup', 'kim')
console.log(message)

//ok 라는 이모지를 lee 가 추가했다는 가정. 새로운 이모지 추가..
message.addEmoji('ok', 'lee')
console.log(message)