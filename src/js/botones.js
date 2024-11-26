const carousel = document.getElementById('Carousel');
const slides = document.querySelectorAll('.Slide');
const prevBtn = document.getElementById('prevBtn');
const nxtBtn = document.getElementById('nxtBtn');

let currentIndex = 0; // Índice actual del slide
const slideCount = slides.length;
const slideInterval = 3000; // Tiempo en pantalla por slide (3 segundos)

// Función para mover el carrusel
function moveToSlide(index) {
    currentIndex = (index + slideCount) % slideCount; // Asegura que el índice sea circular
    const offset = -currentIndex * 100; // Calcular desplazamiento
    carousel.style.transform = `translateX(${offset}%)`;
}

// Mover automáticamente
let autoSlide = setInterval(() => {
    moveToSlide(currentIndex + 1);
}, 3000);

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
});

nxtBtn.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
});

// Pausar al pasar el ratón
carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 3000);
});
