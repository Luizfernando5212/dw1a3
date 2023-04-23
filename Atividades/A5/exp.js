respostas = {
    flex: 'Flexbox',
    ex1: 'justify-content: flex-end',
    ex2: 'justify-content: center;',
    ex3: 'justify-content: space-around',
    ex4: 'justify-content: space-between',
    ex5: 'align-items: flex-end',
    ex6: 'justify-content: center;\nalign-items: center;',
    ex7: 'justify-content: space-around;\nalign-items: flex-end;',
    ex8: 'flex-direction: row-reverse',
    ex9: 'flex-direction: column',
    ex10: 'flex-direction: row-reverse;\njustify-content: flex-end;',
    ex11: 'flex-direction: column;\njustify-content: flex-end;',
    ex12: 'flex-direction: column-reverse;\njustify-content: space-between;',
    ex13: 'flex-direction: row-reverse;\njustify-content: center;\nalign-items: flex-end;',
    ex14: 'order: 1;',
    ex15: 'order: -3',
    ex16: 'align-self: flex-end;',
    ex17: 'order: 3;\nalign-self: flex-end;',
    ex18: 'flex-wrap: wrap;',
    ex19: 'flex-direction: column;\nflex-wrap: wrap;',
    ex20: 'flex-flow: column wrap;',
    ex21: 'align-content: flex-start;',
    ex22: 'align-content: flex-end;',
    ex23: 'flex-direction: column-reverse;\nalign-content: center;',
    ex24: 'flex-flow: column-reverse wrap-reverse;\nalign-content: space-between;\njustify-content: center;',
    grid: 'Gridcss',
    ex01: 'grid-column-start: 3;',
    ex02: 'grid-column-start: 5;',
    ex03: 'grid-column-end: 4;',
    ex04: 'grid-column-end: 2;',
    ex05: 'grid-column-end: 5;',
    ex06: 'grid-column-start: 4;',
    ex07: 'grid-column-end: span 2;',
    ex08: 'grid-column-end: span 5;',
    ex09: 'grid-column-start: span 3;',
    ex010: 'grid-column: 4 / 6;',
    ex011: 'grid-column: 2 / 5;',
    ex012: 'grid-row-start: 3;',
    ex013: 'grid-row: 3 / 6;',
    ex014: 'grid-column: 2;\ngrid-row: 5;',
    ex015: 'grid-row: 1 / 6;\ngrid-column: 2 / 6;',
    ex016: 'grid-area: 1 / 2 / 4 / 6;',
    ex017: 'grid-area: 2 / 3 / 5 / 6;',
    ex018: 'order: 1;',
    ex019: 'order: -1;',
    ex020: 'grid-template-columns: 50%;',
    ex021: 'grid-template-columns: repeat(1, 12.5%);',
    ex022: 'grid-template-columns: 100px 3em 40%;',
    ex023: 'grid-template-columns: 1fr 5fr;',
    ex024: 'grid-template-columns: 50px 1fr 1fr 1fr 50px;',
    ex025: 'grid-template-columns: 75px 1.5fr 1fr;',
    ex026: 'grid-template-rows: repeat(4, 12.5px) 1fr;',
    ex027: 'grid-template: 60% / 200px;',
    ex028: 'grid-template: 1fr 50px / 1fr 4fr;'
}


let body = document.querySelector('#body')
for (const iterator in respostas) {
    let p = document.createElement('p');
    let h2 = document.createElement('h2');
    if (iterator == 'flex' || iterator == 'grid') {
        let texto = document.createTextNode(iterator + ' - ' + respostas[iterator]);
        h2.appendChild(texto)
        body.appendChild(h2)
    } else {
    let texto = document.createTextNode(iterator + ': ' + respostas[iterator]);
    p.appendChild(texto)
    body.appendChild(p)
    }

}
