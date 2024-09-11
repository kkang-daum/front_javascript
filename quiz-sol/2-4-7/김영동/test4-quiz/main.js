"use strict";

let data1 = 10; // global variable

function calcBonus(name, position, salary) {
  let bonus = 0;
  switch (position) {
    case "A":
      bonus = salary * 0.3;
      break;
    case "B":
      bonus = salary * 0.2;
      break;
    case "C":
      bonus = salary * 0.1;
      break;
  }
  console.log(`${name}님의 추석 보너스는 ${bonus}입니다.`);
}

calcBonus("김유신", "A", 1000);
calcBonus("강감찬", "B", 2000);
calcBonus("이순신", "C", 1500);
