const btnSwitch = document.querySelector('#switch');

// Verificar el estado del modo oscuro en el localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplicar el modo oscuro si estaba activo
if (isDarkMode) {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}

btnSwitch.addEventListener('click', () => {
    // Alternar el modo oscuro en el body y almacenar el estado en el localStorage
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    // Agregar aquí la lógica para cambiar el idioma
    // ...
});