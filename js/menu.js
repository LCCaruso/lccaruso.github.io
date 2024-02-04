(function() {
    // Obtener el elemento del menú y la flecha
    const navContainer = document.querySelector('.nav_container');
    const toggleMenu = document.getElementById('toggleMenu');
    const flechaMenu = document.querySelector('.flechas_menu');

    // Función para cerrar el menú
    function cerrarMenu() {
        navContainer.classList.remove('show');
        flechaMenu.style.transform = 'rotate(0deg)';
    }

    // Agregar evento de clic al botón de alternancia
    toggleMenu.addEventListener('click', function(event) {
        // Detener la propagación del evento para evitar que se cierre inmediatamente
        event.stopPropagation();

        // Alternar la clase 'show' en el menú para mostrarlo u ocultarlo
        navContainer.classList.toggle('show');

        // Alternar la rotación de la flecha (180 grados)
        if (navContainer.classList.contains('show')) {
            flechaMenu.style.transform = 'rotate(360deg)'; // Flecha apuntando hacia la derecha
        } else {
            flechaMenu.style.transform = 'rotate(0deg)'; // Flecha apuntando hacia la izquierda
        }
    });

    // Agregar evento de clic al documento para cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function() {
        cerrarMenu();
    });

    // Evitar que el clic dentro del menú cierre el menú
    navContainer.addEventListener('click', function(event) {
        // event.stopPropagation();
    });
})();