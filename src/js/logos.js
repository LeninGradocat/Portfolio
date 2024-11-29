const socialIcons = document.querySelectorAll('.social_icons a img');

// Función para iniciar la animación de parpadeo
function startPulsing(icon) {
    let scale = 1; // Escala inicial
    let growing = true; // Indicador de crecimiento

    function pulse() {
        if (growing) {
            scale += 0.02; // Incrementar el tamaño
            if (scale >= 1.4) growing = false; // Cambiar a reducción si llega al límite superior
        } else {
            scale -= 0.02; // Reducir el tamaño
            if (scale <= 1) growing = true; // Cambiar a crecimiento si llega al límite inferior
        }

        icon.style.transform = `scale(${scale})`;

        // Continuar animando si el cursor sigue encima
        if (icon.dataset.hovering === 'true') {
            requestAnimationFrame(pulse);
        }
    }

    pulse();
}

// Agregamos eventos a cada ícono
socialIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.dataset.hovering = 'true'; // Marcar el estado de hovering
        startPulsing(icon); // Iniciar la animación
    });

    icon.addEventListener('mouseleave', () => {
        icon.dataset.hovering = 'false'; // Detener la animación
        icon.style.transform = 'scale(1)'; // Resetear el tamaño al normal
    });
});