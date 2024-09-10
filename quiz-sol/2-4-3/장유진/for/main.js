"use strict";
for (let i = 1; i < 10; i++) {
    document.write('<div>');
    document.write(`<h3>${i}단</h3>`)
    for (let j = 1; j < 10; j++) {
        document.write(`<p>${i} x ${j} = ${i * j}</p>`);
    }
    document.write('</div>');
}