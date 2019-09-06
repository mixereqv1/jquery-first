for(let i=0; i<100; i++) {
    let div = document.createElement('div');
    div.className = 'square';
    div.innerText = i + 1;
    div.style.backgroundColor = 'rgb('+i*4+',100,0)';
    document.querySelector('body').appendChild(div);
}