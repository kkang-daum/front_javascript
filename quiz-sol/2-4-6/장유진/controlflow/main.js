"use strict";

const primeTest = () => {
  let no = parseInt(prompt('2 이상의 숫자를 입력하세요'), 10);
  let message = '';

  if (isNaN(no) || no < 2) {
    message = '2 이상의 숫자를 입력하세요.';
  } else {
    let primes = [];

    // 소수인지 여부를 판단하는 함수
    const isPrime = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    // 2부터 입력된 수까지 소수 찾기
    for (let i = 2; i <= no; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    // 소수 목록을 출력 메시지에 저장
    if (primes.length > 0) {
      message = `입력하신 ${no}까지 소수는 ${primes.join(', ')} 입니다.`;
    } else {
      message = `${no} 이하의 소수가 없습니다.`;
    }
  }

  // 결과를 HTML 요소에 출력
  document.querySelector('#result').innerHTML = message;
};
