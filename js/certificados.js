document.addEventListener("DOMContentLoaded", function() {
    const certificadosBtn = document.getElementById('certificadosBtn');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');

    certificadosBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});