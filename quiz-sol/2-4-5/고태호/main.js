"use strict";

const primeTest = () => {
    let no = prompt('2 이상의 숫자를 입력하세요')
    var message = `${no}는 소수입니다`   // 미리 설정해놓은 답
    if(no < 2){
        message = '2 이상의 숫자를 입력해주세요'
    } else if(isNaN(no)){
        message = '숫자가 아닌 문자를 입력했습니다. 2 이상의 숫자를 입력하세요.'
    } else{
        let i = 2                       // 모든 숫자의 약수에는 자신과 1이 무조건 포함되므로 2부터 계산한다
        while(i <= no / 2){             // 모든 숫자는 자신의 값의 절반보다 큰 수를 약수로 가지지 않는다
            if(no % i === 0){           // 만약 약수가 발견되면 즉시 break
                message = `${no}는 소수가 아닙니다`
                break
            } 
            i++
        }
    }
    


    //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
    document.querySelector('#result').innerHTML = message
}