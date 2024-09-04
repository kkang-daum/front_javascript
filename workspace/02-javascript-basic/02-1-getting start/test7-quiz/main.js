//다음의 함수는 1부터 10까지 숫자를 더하는 함수입니다.
const a = () => {
  let b = 0;
  for (i = 1; i <= 10; i++) {
    b += i;
    console.log("sum", b);
  }
};
a();


//다음의 코드는 클래스를 생성하고 클래스의 함수를 호출하는 코드입니다.
class USER {
  NAME = '홍길동'
  SAYHELLO = () => {
    console.log(`hello, ${this.NAME}`)
  }
}
new USER().SAYHELLO()

//다음의 코드는 함수를 호출하여 상품을 추가하는 코드입니다.
let product_number = 0
const add_product = () => {
  console.log(`${product_number} 상품을 추가했습니다.`)
}
add_product()

