// Supongamos que tienes un botón que activa el popup
const openButton = document.getElementById('certificadosBtn');
const popup = document.querySelector('.popup');

openButton.addEventListener('click', () => {
    popup.classList.toggle('active');
});

// Para cerrar el popup
const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
});