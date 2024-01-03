// Obtener la referencia al elemento de la flecha
const flechaUp = document.querySelector('.flecha_upcontainer');

// Obtener la referencia a la segunda sección
const segundaSeccion = document.getElementById('salto_pagina1');

// Obtener la posición superior de la segunda sección
const segundaSeccionPos = segundaSeccion.offsetTop;

// Mostrar u ocultar la flecha basada en la posición del scroll
window.addEventListener('scroll', () => {
    // Obtener la posición actual del scroll
    const scrollPos = window.scrollY || window.pageYOffset;

    // Mostrar u ocultar la flecha dependiendo de la posición del scroll
    if (scrollPos >= segundaSeccionPos) {
        flechaUp.style.opacity = '1'; // Mostrar la flecha
        flechaUp.style.pointerEvents = 'auto'; // Permitir clic en la flecha
    } else {
        flechaUp.style.opacity = '0'; // Ocultar la flecha
        flechaUp.style.pointerEvents = 'none'; // Deshabilitar clic en la flecha
    }
});