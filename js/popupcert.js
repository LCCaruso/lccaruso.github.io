document.addEventListener("DOMContentLoaded", function() {
    const certificadosBtn = document.getElementById('certificadosBtn');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-btn');

    certificadosBtn.addEventListener('click', function() {
        popup.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
        popup.classList.remove('active');
    });
});