
// Obtener el modal
const modal = document.getElementById("contactModal");

// Obtener el botón que abre el modal
const openModalBtn = document.getElementById("openModalBtn");

// Obtener el botón de cerrar
const closeBtn = document.querySelector(".close-btn");

// Cuando el usuario haga clic en el botón, se abrirá el modal
openModalBtn.onclick = function() {
modal.style.display = "block";
}

// Cuando el usuario haga clic en la X, el modal se cerrará
closeBtn.onclick = function() {
modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, se cerrará
window.onclick = function(event) {
if (event.target === modal) {
modal.style.display = "none";
}
}
