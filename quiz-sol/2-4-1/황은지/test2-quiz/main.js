let age = prompt("나이를 입력해주세요")

if (age === null) {
  console.log("입력을 취소하셨습니다.")
} else if (isNaN(age)) {
  console.log("숫자가 아닌 문자를 입력하셨습니다.")
} else {
  age = parseInt(age)

  if (age <= 0 || age > 100) {
    console.log("1 이상 100 이하의 숫자를 입력해야 합니다.")
  } else if (age < 10) {
    console.log("어린이군요")
  } else if (age >= 10 && age < 20) {
    console.log("청소년이군요")
  } else {
    console.log("어른이군요")
  }
}
