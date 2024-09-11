"use strict";

function calcBonus(name, grade, salary){
  let bonus = 0
  if(grade === 'A'){
    bonus = salary * 0.3
  }else if(grade === 'B'){
    bonus = salary * 0.2
  }else {
    bonus = salary * 0.1
  }
  console.log(`${name}의 추석 보너스는 ${bonus} 입니다.`)
}

calcBonus('홍길동', 'A', 1000)
calcBonus('김길동', 'B', 500)
calcBonus('이길동', 'C', 500)