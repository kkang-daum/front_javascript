"use strict";

let userAge = window.prompt()

if (userAge == null)
    console.log("입력을 취소 하셨습니다")                   //취소 시
else if (isNaN(userAge))
    console.log("숫자가 아닌 문자를 입력 하셨습니다")        //문자열 입력 시
else if (userAge <= 0 || userAge > 100)
    console.log("1 이상, 100 이하의 숫자를 입력해야 합니다") // 1 미만, 100 이상의 숫자 입력 시
else if (userAge >= 1 && userAge < 10)
    console.log("어린이군요")                              // 10 미만의 숫자 입력 시
else if (userAge >= 10 && userAge < 20)
    console.log("청소년이군요")                            // 10 이상 20 미만의 숫자 입력 시
else if (userAge >= 20 && userAge < 101) 
    console.log("어른이군요")                              // 10 미만의 숫자 입력 시
