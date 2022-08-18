const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['rgb(41,239,233)', 'rgba(250, 103, 238, 1)', 'rgba(103, 250, 176, 1)'
, 'rgba(250, 50, 123, 1)', 'rgba(80, 940, 50, 1)', 'rgba(50, 120, 256, 1)']

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up') 
    startGame()
    }
  })

  board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
         score++
         event.target.remove()
         createNewCircle()
    }
  })

  function startGame() {
     setInterval(decreaseTime, 1000) 
 //    createRandomCircle()
     createNewCircle()
     setTime(time)
  }

  function createNewCircle() {
  let test = createRandomCircle()
 // console.log(test)
  setInterval(() => coordCircle(test, 1), 1500)
  }

function coordCircle(value, flag)
  { 
    const size = getRandomNumber(1, 5);
    const width = 55;
    const height = 55;
    const x = getRandomNumber(2*size, width-2*size);
    const y = getRandomNumber(2*size, height-2*size);
    const color = getRandomColor()
    if (flag === 0) {
    value.style.width = `${size}vmin`
    value.style.height = `${size}vmin`
    value.style.backgroundColor = getRandomColor()   
    } 
    value.style.top = `${y}vmin`;
    value.style.left = `${x}vmin`}


  function decreaseTime() {
     if (time === 0) finishGame()
     else {
     let current = --time
     if (current < 10) current = `0${current}`
     setTime(current)

     }
  }

  function setTime(value) {
    timeEl.innerHTML = `00:${value}`
  }

  function finishGame() {
    timeEl.parentNode.classList.add('hide')  
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`
  }

  function createRandomCircle() {
      //   const {width, height} = board.getBoundingClientRect()
      const circle = document.createElement('div')
      circle.classList.add('circle')
      coordCircle(circle, 0)

      board.append(circle)
      return circle
  }

  function getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min) + min)
  }

  function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}