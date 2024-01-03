(function() {
    // Obtener el elemento del menú y la flecha
    const navContainer = document.querySelector('.nav_container');
    const toggleMenu = document.getElementById('toggleMenu');
    const flechaMenu = document.querySelector('.flechas_menu');

    // Agregar evento de clic al botón de alternancia
    toggleMenu.addEventListener('click', function() {
        // Alternar la clase 'show' en el menú para mostrarlo u ocultarlo
        navContainer.classList.toggle('show');

        // Alternar la rotación de la flecha (180 grados)
        if (navContainer.classList.contains('show')) {
            flechaMenu.style.transform = 'rotate(360deg)'; // Flecha apuntando hacia la derecha
        } else {
            flechaMenu.style.transform = 'rotate(0deg)'; // Flecha apuntando hacia la izquierda
        }
    });
})();