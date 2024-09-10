'use strict';

let i = 0;
while (i <= 8) {
  document.write(`<div><h3>${i + 1}단</h3>`);
  i++;
  let j = 1;
  while (j <= 9) {
    document.write(`<p>${i}X${j}=${i * j}</p>`);
    j++;
  }
  document.write(`</div>`);
}
