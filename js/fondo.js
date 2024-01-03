// Cambia la posición del fondo mientras te desplazas por la página
window.addEventListener('scroll', function() {
    const yPos = window.scrollY;
    const body = document.querySelector('body');
    body.style.backgroundPositionY = -yPos * 5 + 'px'; // Ajusta la velocidad de desplazamiento del fondo
});