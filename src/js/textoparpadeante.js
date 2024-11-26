document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById("animacion-tex");
    const textArray = ["Xavier Sánchez", "Desarrollador Web", "Diseñador Frontend"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isTyping = true;

    function typeText() {
        if (isTyping) {
            currentText = textArray[textIndex].slice(0, charIndex);
            textElement.textContent = currentText;
            charIndex++;
            if (charIndex > textArray[textIndex].length) {
                isTyping = false;
                setTimeout(deleteText, 1000); // Pausa antes de borrar
            }
        }
    }

    function deleteText() {
        if (!isTyping) {
            currentText = textArray[textIndex].slice(0, charIndex);
            textElement.textContent = currentText;
            charIndex--;
            if (charIndex < 0) {
                textIndex = (textIndex + 1) % textArray.length;
                charIndex = 0;
                isTyping = true;
            }
        }
    }

    setInterval(typeText, 150);  // Velocidad de escritura
});
