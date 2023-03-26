respostas = {
    ex1: 'page',
    ex2: 'bento',
    ex3: '#fancy',
    ex4: 'plate>apple',
    ex5: '#fancy>pickle',
    ex6: '.small',
    ex7: 'orange.small',
    ex8: 'bento>orange.small',
    ex9: 'plate, bento',
    ex10: '*',
    ex11: 'plate *',
    ex12: 'plate + apple',
    ex13: 'bento ~ pickle',
    ex14: 'plate>apple',
    ex15: 'orange:first-child',
    ex16: 'apple, pickle:only-child',
    ex17: 'apple, pickle:last-child',
    ex18: 'plate:nth-child(3)',
    ex19: ':nth-last-child(4)',
    ex20: 'apple:first-of-type',
    ex21: 'plate:nth-of-type(even)',
    ex22: 'plate:nth-of-type(2n+3)',
    ex23: 'plate apple:only-of-type',
    ex24: 'orange:last-of-type, apple:last-of-type',
    ex25: 'bento:empty',
    ex26: 'apple:not(.small)'
}


// let div = document.createElement('div')
let body = document.querySelector('#body')
for (const iterator in respostas) {
    let p = document.createElement('p');
    let texto = document.createTextNode(iterator + ': ' + respostas[iterator]);
    p.appendChild(texto)
    body.appendChild(p)
    // p.textContent = iterator + ' ' + respostas[iterator];
    // div.appendChild(p);
    console.log(iterator)
}
