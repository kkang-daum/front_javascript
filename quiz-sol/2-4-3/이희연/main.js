"use strict";

//구구단
let result = 0;
for (let i = 1; i <= 9; i++) {  
    document.write('<div>');
    document.write(`<h3> ${i}단 </h3>`)
    for (let j = 1; j <= 9 ; j++) {
        result = i * j;
        document.write(`${i}X${j} = ${result}`);
        document.write('<br>');
    }
    document.write('</div>');
}