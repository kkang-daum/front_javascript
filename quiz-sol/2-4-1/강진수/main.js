const getAge = () => {
  let userAge = prompt("당신의 나이를 입력하세요.");
  if (userAge === null) console.log("입력을 취소하였습니다.");
  else if (userAge < 0 || userAge >= 100)
    console.log("1이상, 100이하의 숫자를 입력해야 합니다.");
  else if (userAge < 10) console.log("어린이군요!");
  else if (userAge < 20) console.log("청소년이군요!");
  else if (userAge >= 20) console.log("어른이군요!");
  else if (isNaN(userAge)) console.log("숫자가 아닌 문자를 입력하셨습니다.");
};

getAge();
