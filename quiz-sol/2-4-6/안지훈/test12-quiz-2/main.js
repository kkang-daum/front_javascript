"use strict";

const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");
  let message = "";

  let primeNumbers = [];

  if (no < 2) {
    message = "2 이상의 숫자를 입력하세요."
  }

  for (let range = 2; range <= no; range++) {
    let isPrimeNumber = true;

    if (range === 2) {
      isPrimeNumber = true;
    } else if (range % 2 === 0) {
      isPrimeNumber = false;
    } else {
      for (let prime = 3; prime <= Math.sqrt(range); prime += 2) {
        if (range % prime === 0) {
          isPrimeNumber = false;
          break;
        }
      }
    }

    if (isPrimeNumber) {
      primeNumbers.push(range);
      message = `입력하신 ${no}까지 소수는 ${primeNumbers.join(", ")} 입니다.`;
    }
  }

  //어떤 수가 소수인지를 판단, 2부터 증가시켜서 나누어야 한다. ==> loop
  //2부터 입력받은 수까지 증가시키면서 소수인지를 판단한다. ==>loop

  
  document.querySelector("#result").innerHTML = message;
};