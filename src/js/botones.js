const carousel = document.getElementById('Carousel');
const slides = document.querySelectorAll('.Slide');
const prevBtn = document.getElementById('prevBtn');
const nxtBtn = document.getElementById('nxtBtn');

let currentIndex = 0; // Índice actual del slide
const slideCount = slides.length;
const slideInterval = 3000; // Tiempo en pantalla por slide (3 segundos)

// Duplicar el primer y último slide temporalmente para un efecto continuo
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);
carousel.appendChild(firstSlide);
carousel.insertBefore(lastSlide, slides[0]);

// Actualizar la lista de slides
const updatedSlides = document.querySelectorAll('.Slide');

carousel.style.transform = `translateX(-100%)`;

// Función para mover el carrusel
function moveToSlide(index, transition = true) {
    if (transition) {
        carousel.style.transition = 'transform 0.5s ease-in-out';
    } else {
        carousel.style.transition = 'none';
    }
    const offset = -((index + 1) * 100);
    carousel.style.transform = `translateX(${offset}%)`;
    currentIndex = index;

    // Al final de la transición, ajustar la posición sin animación si es necesario
    carousel.addEventListener('transitionend', () => {
        if (currentIndex >= slideCount) {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(-100%)`;
            currentIndex = 0;
        } else if (currentIndex < 0) {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(-${slideCount * 100}%)`;
            currentIndex = slideCount - 1;
        }
    }, { once: true });
}

// Mover automáticamente
let autoSlide = setInterval(() => {
    moveToSlide(currentIndex + 1);
}, slideInterval);

// Función para reiniciar el temporizador del carrusel automático
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, slideInterval);
}

// Botones de navegación
prevBtn.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
    resetAutoSlide(); // Reiniciar el temporizador al hacer clic
});

nxtBtn.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
    resetAutoSlide(); // Reiniciar el temporizador al hacer clic
});

// Pausar al pasar el ratón
carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, slideInterval);
});
