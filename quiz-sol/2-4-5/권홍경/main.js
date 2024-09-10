"use strict";

const primeTest = () => {
    let no = prompt('2 이상의 숫자를 입력하세요')
    let message = ''
    if (no < 2) {
        message = '2 이상의 숫자를 입력하세요.'
    } else {
        //이 값이 true - 소수, false - 소수가 아니다.
        let primeNum = true
        for (let i = 2; i <= Math.sqrt(no); i++) {
            if(no % i === 0) {
                primeNum = false
                break
            }
        }
        message = primeNum ? `${no}는 소수` : `${no}는 소수가 아님`
    }


    //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
    document.querySelector('#result').innerHTML = message
}
