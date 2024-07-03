let box = document.querySelector('.box');
const count = 695;

let colors = ['red','blue','white','green','purple']

for(let i = 0; i <= count; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseenter', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    
    box.append(square)
}

function setColor(el) {
    el.style.background = colors[Math.floor(Math.random() * colors.length)]
}


function removeColor(el) {
    el.style.background = ''
}