"use strict";

const calcBonus = (name, position, annualSalary) => {
  let rate;
  switch (position) {
    case "A":
      rate = 0.3;
      break;
    case "B":
      rate = 0.2;
      break;
    case "C":
      rate = 0.1;
      break;
  }

  console.log(`${name}의 추석 보너스는 ${annualSalary * rate} 입니다.`);
};

calcBonus("김길동", "B", 500);
