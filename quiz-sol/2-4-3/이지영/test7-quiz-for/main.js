"use strict";

for (let i = 1; i <= 9; i++) {
  document.write(`<div> <h3>${i}단</h3>`);
  for (let j = 1; j < 10; j++) {
    document.write(`<h3>${i} X ${j} = ${i * j}</h3>`);
  }
  document.write(`</div>`);
}
