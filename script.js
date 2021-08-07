// bring in elements we need from index html
const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slider')
const sliderLeft = document.querySelector('.left-slider')
const upBtn = document.querySelector('.up-button')
const dwnBtn = document.querySelector('.down-button')

// count the number of slides on the right container
const slideCount = sliderRight.querySelectorAll('div').length


// console.log(slideCount)

let activeSlideIndex = 0;

// lining up the left and right divs
sliderLeft.style.top = `-${(slideCount - 1) * 100}vh`

// adding functionality to the scroll buttons
upBtn.addEventListener('click', () => changeSlide('up'))
dwnBtn.addEventListener('click', () => changeSlide('down'))

// function that will toggle the behavior of the buttons 
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    // console.log(sliderHeight)
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slideCount - 1) {
            activeSlideIndex = 0
        }
    }

    else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
        } 
    }

    // right slider
    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    // left slider
    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}