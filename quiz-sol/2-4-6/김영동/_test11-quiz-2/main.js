"use strict";

const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");
  let primes = [];
  let message = "";

  for (let i = 2; i <= no; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  message = `입력하신 ${no}까지의 소수는 ${primes.join(", ")}입니다.`;

  //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
  document.querySelector("#result").innerHTML = message;
};
