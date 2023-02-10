function changingStates() {
    const menuIcon = document.querySelector('.menuIcon')
    menuIcon.classList.toggle('active')
    const showHeader = document.getElementById('navbar')
    showHeader.classList.toggle('active')
    const controls = document.querySelector('.controls')
    controls.classList.toggle('active')
}

const slideShow = document.querySelector('#slideShow')
const slides = slideShow.getElementsByTagName('img')



var index = 0;
function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

const slideShowText = document.getElementById('slideShowText')
const slideText = slideShowText.getElementsByTagName('div')
var indexText = 0;
function nextSlideText() {
    slideText[indexText].classList.remove('active');
    indexText = (indexText + 1) % slideText.length;
    slideText[index].classList.add('active');
}
function prevSlideText() {
    slideText[indexText].classList.remove('active');
    indexText = (indexText - 1 + slideText.length) % slideText.length;
    slideText[index].classList.add('active');
}
