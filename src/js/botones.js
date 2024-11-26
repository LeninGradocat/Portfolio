const carousel = document.getElementById('Carousel');
const slides = document.getElementById('.Slide');
const prevBtn = document.getElementById('prevBtn');
const nxtBtn = document.getElementById('nxtBtn');

const slideWidth = slides[0].offsetWidth;  // Ancho de cada slide
let currentIndex = 0;

function moveCarousel(direction) {
    const currentTransform = getComputedStyle(carousel).transform;
    const currentTranslateX = currentTransform === 'none' ? 0 : parseFloat(currentTransform.split(',')[4]);

    const newTranslateX = currentTranslateX + direction * slideWidth;

    if (newTranslateX > 0) {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${slideWidth * (slides.length - 1)}px)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = `translateX(-${slideWidth * (slides.length - 1)}px)`;
        }, 50);
    } else if (newTranslateX < -slideWidth * (slides.length - 1)) {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(0)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = `translateX(0)`;
        }, 50);
    } else {
        carousel.style.transform = `translateX(${newTranslateX}px)`;
    }
}

prevBtn.addEventListener('click', () => moveCarousel(1));
nextBtn.addEventListener('click', () => moveCarousel(-1));

carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
});