const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let slider = document.querySelector('.slider');

let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);


slider.addEventListener('click', slideNext);
document.querySelector('.slider-next').addEventListener('click', slideNext);
document.querySelector('.slider-prev').addEventListener('click', slidePrev);

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

function slideNext() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}

function slidePrev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
}