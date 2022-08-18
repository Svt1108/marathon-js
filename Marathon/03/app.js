const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = document.querySelectorAll('.main-slide > div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`  //поднимает нужный по цвету слайд sidebar к картинке

upBtn.addEventListener('click', () => changeSlide('up'))

downBtn.addEventListener('click', () => changeSlide('down') )

function changeSlide(direction) {
  if (direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex >= slidesCount) activeSlideIndex = 0
  }
  else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) activeSlideIndex = slidesCount - 1
}

const height = container.clientHeight //оставлено для примера sidebar.style.transform, 
//в принципе работает и без этого (как в mainSlide.style.transform)

mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`

sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}

