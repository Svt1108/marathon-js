const board = document.querySelector('.container')
const colors = ['rgba(174, 161, 247, 0.7)', 'rgba(250, 103, 238, 0.7)', 'rgba(103, 250, 176, 0.7)'
, 'rgba(110, 200, 150, 0.7)', 'rgba(0, 103, 123, 0.7)'
, 'rgba(116, 137, 255, 0.7)', 'rgba(155, 239, 256, 0.7)']
const heart = [181,157,158,184,185,211,237,213,189,190,166,167,193,219,245,270,295,320,344,369,393,417
    ,442,466,490,514,538,562,536,510,484,458,432,407,381,355,330,304,279,254,229,205]
const SQUARES_NUMBER = 1100

let num = Math.floor(SQUARES_NUMBER/25)*25

for (let i = 0; i < num; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    if (heart.includes(i)){
        square.addEventListener('mouseover', () => setColorAzzurro(square))   
    }

else {
square.addEventListener('mouseover', () => setColor(square))
square.addEventListener('mouseleave', () => removeColor(square))
}
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = getRandomColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 8px ${color}`
}

function setColorAzzurro(element) {
    element.style.backgroundColor = 'rgb(103, 208, 250)'
     element.style.boxShadow = `0 0 2px rgb(103, 208, 250)`
}

function removeColor(element) {
    element.style.backgroundColor = 'rgb(255, 255, 255)'
    element.style.boxShadow = `0 0 2px rgb(181, 169, 245), 0 0 4px rgb(181, 169, 245)`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}