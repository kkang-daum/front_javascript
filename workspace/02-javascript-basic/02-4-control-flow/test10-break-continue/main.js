"use strict";

for(let i = 0; i < 10; i++){
  if(i % 2 === 0){
    continue
  }
  console.log(`for body ${i}`)
  if(i === 7){
    break
  }
}

// for(let no1 = 0; no1 < 2; no1++){
//   console.log(`step1 : ${no1}`)
//   for(let no2 = 0; no2 < 2; no2++){
//     console.log(`step2 : ${no1}, ${no2}`)
//   }
// }
//step1 : 0
//step2 : 0, 0
//step2 : 0, 1
//step1 : 1
//step2 : 1, 0
//step2 : 1, 1

// for(let no1 = 0; no1 < 2; no1++){
//   console.log(`step1 : ${no1}`)
//   for(let no2 = 0; no2 < 2; no2++){
//     console.log(`step2 : ${no1}, ${no2}`)
//     break
//   }
// }
//step1 : 0
//step2 : 0, 0
//step1 : 1
//step2 : 1, 0

aaa : for(let no1 = 0; no1 < 2; no1++){
  console.log(`step1 : ${no1}`)
  for(let no2 = 0; no2 < 2; no2++){
    console.log(`step2 : ${no1}, ${no2}`)
    break aaa
  }
}
//step1 : 0
//step2 : 0, 0