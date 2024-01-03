// Obtener todos los enlaces que dirigen a la sección "Sobre Mí"
const enlacesSobreMi = document.querySelectorAll('.nav_link[href="#salto_pagina1"], .inicio_link[href="#salto_pagina1"]');

// Función para manejar el clic en los enlaces "Sobre Mí"
const manejarClicEnlaceSobreMi = () => {
    // Obtener los iconos de la sección "Sobre Mí"
    const iconosSobreMi = document.getElementById('sobremi').querySelectorAll('.sobre_mi_icon');

    // Agregar la clase que activa la animación a cada icono
    iconosSobreMi.forEach((icono, index) => {
        icono.style.transitionDelay = `${index * 0.1}s`; // Ajusta el retardo para cada icono
        icono.classList.add('aparecer');
    });
};

// Agregar un evento de clic a cada enlace "Sobre Mí"
enlacesSobreMi.forEach((enlace) => {
    enlace.addEventListener('click', manejarClicEnlaceSobreMi);
});