//다음의 함수는 1부터 10까지 숫자를 더하는 함수입니다.
const sum = () => {
    let result = 0;
    for(i = 1; i <= 10; i++) {
        result += i;
        console.log('sum', result);
    }
}
sum()
    
    
//다음의 코드는 클래스를 생성하고 클래스의 함수를 호출하는 코드입니다.
class User {
    name = '홍길동'

    sayHello = () => {
        console.log(`hello, ${this.name}`)
    }
}
new User().sayHello()
    
//다음의 코드는 함수를 호출하여 상품을 추가하는 코드입니다.
let productNumber = 0
const addProduct = () => {
    console.log(`${productNumber} 상품을 추가했습니다.`)
}
addProduct()