const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

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

  console.log(test)
  setInterval(() => { 
    const size = getRandomNumber(1, 5);
    const width = 55;
    const height = 55;
    const x = getRandomNumber(2*size, width-2*size);
    const y = getRandomNumber(2*size, height-2*size);
    test.style.width = `${size}vmin`
    test.style.height = `${size}vmin`    
    test.style.top = `${y}vmin`;
    test.style.left = `${x}vmin`}, 1500)
  }

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
    board.innerHTML = `<h1>Your score: <span class="primary">${score}</span></h1>`
  }

  function createRandomCircle() {
      const circle = document.createElement('div')
      const size = getRandomNumber(1, 5)
    //   const {width, height} = board.getBoundingClientRect()
      const width = 55
      const height = 55
      const x = getRandomNumber(2*size, width-2*size)
      const y = getRandomNumber(2*size, height-2*size)
      circle.classList.add('circle')
      circle.style.width = `${size}vmin`
      circle.style.height = `${size}vmin`
      circle.style.top = `${y}vmin`
      circle.style.left = `${x}vmin`

      board.append(circle)
      return circle
  }

  function getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min) + min)
  }