(function() {
    // Obtener el elemento del menú y la flecha
    const configContainer = document.querySelector('.config_container');
    const toggleConfig = document.getElementById('toggleConfig');
    const ruedaConfig = document.querySelector('.icono_config');

    // Agregar evento de clic al botón de alternancia
    toggleConfig.addEventListener('click', function() {
        // Alternar la clase 'show' en el menú para mostrarlo u ocultarlo
        configContainer.classList.toggle('show');

        // Alternar la rotación de la flecha (180 grados)
        if (configContainer.classList.contains('show')) {
            ruedaConfig.style.transform = 'rotate(-360deg)'; // rueda girando
        } else {
            ruedaConfig.style.transform = 'rotate(0deg)'; // rueda girando
        }
    });
})();