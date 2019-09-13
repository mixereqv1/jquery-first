// for(let i=0; i<100; i++) {
//     let div = document.createElement('div');
//     div.className = 'square';
//     div.innerText = i + 1;
//     div.style.backgroundColor = 'rgb('+i*4+',100,0)';
//     document.querySelector('body').appendChild(div);
// }

let table = document.createElement('table');
document.querySelector('body').appendChild(table);
for(let i=0; i<5; i++) {
    let tr = document.createElement('tr');
    for(let j=0; j<5; j++) {
        let td = document.createElement('td');
        td.innerText = i*5+j+1;
        // td.id = i*5+j+1;
        tr.appendChild(td);
    }
    document.querySelector('table').appendChild(tr);
}