const slides = document.querySelectorAll('.slide')


slides.forEach((slide) => {

    slide.addEventListener('click', () => {
        clearActiveClasses(slide);
        slide.classList.toggle('act');
            })
});

function clearActiveClasses(currSlide) {
    slides.forEach((slide) => {
        if (slide != currSlide)
        slide.classList.remove('act')
    })
}